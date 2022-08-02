/**
 * It can be used to render a Input for the text.
 *
 */

import React from 'react';

export const TextInput = props => {
  return (
    <input
      type="text"
      id="small-input"
      class="block p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center mr-2 mb-2"
      placeholder="Username"
    />
  );
};
