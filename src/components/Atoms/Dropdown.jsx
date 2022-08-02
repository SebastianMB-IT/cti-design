/**
 * It can be used to render a Dropdown menu.
 *
 * @param {string} option1 Used to render the name of the first Dropdown option.
 * @param {string} option2 Used to render the name of the second Dropdown option.
 * @param {string} option3 Used to render the name of the third Dropdown option.
 * @param {string} option4 Used to render the name of the fourth Dropdown option.
 * @param {string} icon The icon to render.
 */

import React from 'react';
import PropTypes from 'prop-types';

export const Dropdown = ({ option1, option2, option3, option4, icon }) => {
  const [showOptions, setShowOptions] = React.useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleClick}
        id="dropdownMenuIconButton"
        data-dropdown-toggle="dropdownDots"
        class="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none"
        type="button"
      >
        {icon}
      </button>
      {showOptions && (
        <div>
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            <li>
              <a className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                {option1}
              </a>
            </li>
            <li>
              <a className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                {option2}
              </a>
            </li>
            <li>
              <a className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                {option3}
              </a>
            </li>
            <li>
              <a className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                {option4}
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  option1: PropTypes.string.isRequired,
  option2: PropTypes.string.isRequired,
  option3: PropTypes.string,
  option4: PropTypes.string,
  icon: PropTypes.element,
};
