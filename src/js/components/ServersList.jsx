/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function ServersList({ parsedConfigList }) {
  const flatArray = (serverData) => {
    const diskList = [];
    if (serverData && serverData.diskList.length > 0) {
      serverData.diskList.forEach((diskGroup) => {
        for (let i = 0; i < diskGroup.diskCount; i += 1) {
          diskList.push(`${diskGroup.diskType} ${diskGroup.diskSize}`);
        }
      });
    }
    return diskList;
  };

  const line = (serverData) => {
    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="px-6 py-4">{`${serverData.barcode}, ${serverData.rack} Unit ${serverData.unit}`}</td>
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {serverData.srcConfig}
        </th>
        <td className="px-6 py-4">{serverData.cpuInfo.cpuCount}</td>
        <td className="px-6 py-4">{serverData.cpuInfo.cpuName}</td>
        <td className="px-6 py-4">{serverData.ramCount}</td>
        {flatArray(serverData).map((el) => {
          return <td className="px-6 py-4">{el}</td>;
        })}
      </tr>
    );
  };

  if (parsedConfigList && parsedConfigList.length > 0) {
    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Source config
              </th>
              <th scope="col" className="px-6 py-3">
                CPU count
              </th>
              <th scope="col" className="px-6 py-3">
                CPU name
              </th>
              <th scope="col" className="px-6 py-3">
                RAM Size
              </th>
              <th scope="col" className="px-6 py-3">
                Disk 1
              </th>
              <th scope="col" className="px-6 py-3">
                Disk 2
              </th>
              <th scope="col" className="px-6 py-3">
                Disk 3
              </th>
              <th scope="col" className="px-6 py-3">
                Disk 4
              </th>
              <th scope="col" className="px-6 py-3">
                Disk 5
              </th>
              <th scope="col" className="px-6 py-3">
                Disk 6
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>{parsedConfigList.map((el) => line(el))}</tbody>
        </table>
      </div>
    );
  }
}

ServersList.propTypes = {
  parsedConfigList: PropTypes.array.isRequired,
};
