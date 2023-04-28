export const processJson = (jsonData) => {
  const parseConfig = (serverConfigString) => {
    // E-2146G-64Gb-1920SSD-3840SSD
    const ramDataEnd = serverConfigString.indexOf('Gb') + 2;
    const procAndRam = serverConfigString.slice(0, ramDataEnd).split('-');
    let ramCount = procAndRam.slice(-1)[0];
    ramCount = ramCount.slice(0, ramCount.length - 2);
    const cpuConfig = procAndRam.slice(0, procAndRam.length - 1).join('-');
    let cpuCount = 1;
    let cpuName = cpuConfig;
    if (!Number.isNaN(cpuConfig[0]) && cpuConfig[1] === 'x') {
      cpuCount = Number(cpuConfig[0]);
      cpuName = cpuConfig.slice(2);
    }

    const cpuInfo = { cpuName, cpuCount };

    const diskInfo = serverConfigString
      .slice(ramDataEnd)
      .replace('lsi', '')
      .replace('hp', '')
      .split('-')
      .filter((el) => el && el !== '');

    const extractDiskData = (diskInfoPart) => {
      let diskCount = 1;
      let diskSizeType = diskInfoPart;

      if (diskInfoPart[0] >= '0' && diskInfoPart[0] <= '9' && diskInfoPart[1] === 'x') {
        diskCount = Number(diskInfoPart[0]);
        diskSizeType = diskInfoPart.slice(2);
      }

      const typeStartPos = [...diskSizeType].reduce((acc, el) => {
        if (el >= '0' && el <= '9') {
          return acc + 1;
        }
        return acc;
      }, 0);

      const diskType = diskSizeType.slice(typeStartPos);
      const diskSize = diskSizeType.slice(0, typeStartPos);

      return { diskCount, diskType, diskSize };
    };

    const diskList = diskInfo.map((el) => extractDiskData(el));

    return { cpuInfo, ramCount, diskList };
  };

  const data = jsonData.list.map((el) => {
    if (el.configuration && el.configuration !== '') {
      const res = {
        ...parseConfig(el.configuration),
        id: el.id,
        srcConfig: el.configuration,
        barcode: el.barcode,
        rack: el.rack.name,
        unit: el.unit,
      };
      return res;
    }
    return null;
  });
  return data.filter((el) => el);
};

export const filterList = (listOfServers, filtersConfig) => {
  if (!filtersConfig) {
    return listOfServers;
  }

  const { ramSizeLess, ramSizeMore, cpuCount, cpuName } = filtersConfig;

  const filterByRamSizeMore = (list) => {
    return list.filter((el) => !(el.ramCount <= Number(ramSizeMore)));
  };

  const filterByRamSizeLess = (list) => {
    return list.filter((el) => !(el.ramCount >= Number(ramSizeLess)));
  };

  const filterByCpuCount = (list) => {
    return list.filter((el) => el.cpuInfo.cpuCount === Number(cpuCount) || !Number(cpuCount));
  };

  const filterByCpuName = (list) => {
    return list.filter((el) => el.cpuInfo.cpuName.includes(cpuName));
  };

  const filters = [filterByRamSizeMore, filterByRamSizeLess, filterByCpuCount, filterByCpuName];

  const parsedConfigListFiltered = filters.reduce((acc, el) => (el ? el(acc) : acc), listOfServers);

  return parsedConfigListFiltered;
};
