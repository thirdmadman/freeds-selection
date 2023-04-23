/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import LoadDataForm from './components/LoadDataForm';
import SliderComponent from './components/SliderComponent';
import { processJson, filterList } from './utils';
import ServersList from './components/ServersList';
import Filters from './components/Filters';
import PopupComponent from './components/PopupComponent';

function App() {
  const [isLoadFormShown, setIsLoadFormShown] = useState(true);

  const [serversData, setServersData] = useState({ list: [] });

  const [parsedConfigList, setParsedConfigList] = useState([]);

  const [filtersConfigs, setFiltersConfigs] = useState();

  const loadDataAction = async (dataInfo) => {
    const response = await fetch(dataInfo.url);

    const json = await response.json();

    return json;
  };

  const setDataInfo = (dataInfo) => {
    setIsLoadFormShown(false);
    loadDataAction(dataInfo).then((res) => {
      setServersData(res);
      setParsedConfigList(processJson(res));
    });
  };

  return (
    <div className="container mx-auto pt-10 max-w-7xl px-6 lg:px-8">
      {isLoadFormShown && <PopupComponent mainContent={<LoadDataForm onClickAction={setDataInfo} />} />}
      <Filters changeHandler={setFiltersConfigs} />
      <ServersList parsedConfigList={filterList(parsedConfigList, filtersConfigs)} />
      <SliderComponent />
    </div>
  );
}

export default App;
