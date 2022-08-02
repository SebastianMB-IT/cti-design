/**
 * It can be used to render a Checkbox.
 *
 * @param {string} first The content of the first checkbox to render.
 * @param {string} second The content of the second checkbox to render.
 * @param {string} third The content of the third checkbox to render.
 */

import React from 'react';
import PropTypes from 'prop-types';
export const Checkbox = ({ first, second, third }) => {
  return (
    <div>
      <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
        Order by:
      </h3>
      <fieldset>
        <legend class="sr-only"></legend>
        <div class="flex items-center mb-4">
          <input
            id="country-option-1"
            type="radio"
            name="countries"
            value="USA"
            class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            aria-labelledby="country-option-1"
            aria-describedby="country-option-1"
            checked
          />
          <label
            for="country-option-1"
            class="text-sm font-medium text-gray-900 ml-2 block"
          >
            {first}
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="country-option-1"
            type="radio"
            name="countries"
            value="USA"
            class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            aria-labelledby="country-option-1"
            aria-describedby="country-option-1"
            checked
          />
          <label
            for="country-option-1"
            class="text-sm font-medium text-gray-900 ml-2 block"
          >
            {second}
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="country-option-1"
            type="radio"
            name="countries"
            value="USA"
            class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            aria-labelledby="country-option-1"
            aria-describedby="country-option-1"
            checked
          />
          <label
            for="country-option-1"
            class="text-sm font-medium text-gray-900 ml-2 block"
          >
            {third}
          </label>
        </div>
      </fieldset>
    </div>
  );
};

Checkbox.propTypes = {
  first: PropTypes.string,
  second: PropTypes.string,
  third: PropTypes.string,
};
