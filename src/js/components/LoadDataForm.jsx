/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function LoadDataForm({ onClickAction }) {
  const [url, setUrl] = useState('');
  return (
    <div className="mb-6">
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Input link for JSON file with servers, provided by API
      </p>
      <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Input URL to load
      </label>
      <input
        onChange={(e) => setUrl(e.target.value)}
        value={url}
        type="text"
        id="default-input"
        className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg 
    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium 
        rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => onClickAction({ url })}
      >
        Load data
      </button>
    </div>
  );
}

LoadDataForm.propTypes = {
  onClickAction: PropTypes.func.isRequired,
};
