/**
 * It can be used to render a Dropdown menu.
 *
 * @param {string} dropdownTitle Used to render the title of the Dropdown.
 * @param {string} option1 Used to render the name of the first Dropdown option.
 * @param {string} option2 Used to render the name of the second Dropdown option.
 * @param {string} option3 Used to render the name of the third Dropdown option.
 * @param {string} option4 Used to render the name of the fourth Dropdown option.
 * @param {element} icon Used to render the icon of the Dropdown.
 * @param {boolean} isText Used to render the Dropdown as a text.
 * @param {boolean} isIcon Used to render the Dropdown as an icon.
 */
import React from 'react';
import PropTypes from 'prop-types';
export const Dropdown = ({
  dropdownTitle,
  option1,
  option2,
  option3,
  option4,
  icon,
  isText,
  isIcon,
}) => {
  const [showOptions, setShowOptions] = React.useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div className="relative inline-block">
      {isText && (
        <button
          onClick={handleClick}
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
          type="button"
        >
          <span className="mx-1">{dropdownTitle}</span>
          <span className="text-xl w-5 h-5 mx-1">{icon}</span>
        </button>
      )}
      {isIcon && (
        <button
          onClick={handleClick}
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
          type="button"
        >
          <span className="mx-1">{icon}</span>
        </button>
      )}
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
  dropdownTitle: PropTypes.string,
  option1: PropTypes.string.isRequired,
  option2: PropTypes.string.isRequired,
  option3: PropTypes.string,
  option4: PropTypes.string,
  icon: PropTypes.element,
  isText: PropTypes.bool,
  isIcon: PropTypes.bool,
};
