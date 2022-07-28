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
    <div>
      <div>
        <button
          onClick={handleClick}
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  {option1}
                </a>
              </li>
              <li>
                <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  {option2}
                </a>
              </li>
              <li>
                <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  {option3}
                </a>
              </li>
              <li>
                <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  {option4}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
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
