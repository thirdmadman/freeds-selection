/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Filters({ changeHandler }) {
  const [ramSizeMore, setRamSizeMore] = useState(1);
  const [ramSizeLess, setRamSizeLess] = useState(1000);
  const [cpuCount, setCpuCount] = useState(0);
  const [cpuName, setCpuName] = useState('');

  const getSlider = (text, value, action, rangeConf) => {
    return (
      <div className="mb-2">
        <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {text} {Number(value) ? value : 'All'}
        </label>
        <input
          id="default-range"
          type="range"
          value={value}
          min={rangeConf.min}
          max={rangeConf.max}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mb-5"
          onChange={action}
        />
      </div>
    );
  };

  return (
    <>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Choose your server settings using inputs below</p>

      {getSlider(
        'CPU count =',
        cpuCount,
        (e) => {
          setCpuCount(e.target.value);
          changeHandler({
            ramSizeMore,
            ramSizeLess,
            cpuCount: e.target.value,
            cpuName,
          });
        },
        { min: '0', max: '2' },
      )}

      <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Start typing name of CPU
      </label>
      <input
        onChange={(e) => {
          setCpuName(e.target.value);
          changeHandler({
            ramSizeMore,
            ramSizeLess,
            cpuCount,
            cpuName: e.target.value,
          });
        }}
        value={cpuName}
        type="text"
        id="default-input"
        className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      {getSlider(
        'Ram size >',
        ramSizeMore,
        (e) => {
          setRamSizeMore(e.target.value);
          changeHandler({
            ramSizeMore: e.target.value,
            ramSizeLess,
            cpuCount,
            cpuName,
          });
        },
        { min: '1', max: '2000' },
      )}

      {getSlider(
        'Ram size <',
        ramSizeLess,
        (e) => {
          setRamSizeLess(e.target.value);
          changeHandler({
            ramSizeMore,
            ramSizeLess: e.target.value,
            cpuCount,
            cpuName,
          });
        },
        { min: '1', max: '2000' },
      )}
    </>
  );
}

Filters.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};
