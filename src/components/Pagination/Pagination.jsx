/**
 * It can be used to render a Pagination.
 *
 * @param {element} iconPrevious - The icon to be used for the previous button.
 * @param {element} iconNext - The icon to be used for the next button.
 * @param {boolean} isDefault - If true, the default pagination will be rendered.
 * @param {boolean} isIcon - If true, the pagination will be rendered with icons.
 * @param {string} begin - The text to be used for the previous button.
 * @param {string} end - The text to be used for the next button.
 */

import React from 'react';
import PropTypes from 'prop-types';

export const Pagination = ({
  iconPrevious,
  iconNext,
  isDefault,
  isIcon,
  begin,
  end,
}) => {
  const [togglePag, setTogglePag] = React.useState(1);
  const togglePagination = index => {
    setTogglePag(index);
  };
  return (
    <div>
      {isDefault && (
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px">
            <li>
              <button
                onClick={() => togglePagination(1)}
                className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {begin}
              </button>
            </li>
            <li>
              <button
                onClick={() => togglePagination(2)}
                className={
                  togglePag === 2
                    ? 'py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                    : 'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                }
              >
                1
              </button>
            </li>
            <li>
              <button
                onClick={() => togglePagination(3)}
                className={
                  togglePag === 3
                    ? 'py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                    : 'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                }
              >
                2
              </button>
            </li>
            <li>
              <button
                onClick={() => togglePagination(4)}
                className={
                  togglePag === 4
                    ? 'py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                    : 'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                }
              >
                3
              </button>
            </li>
            <li>
              <button
                onClick={() => togglePagination(5)}
                className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {end}
              </button>
            </li>
          </ul>
        </nav>
      )}
      {isIcon && (
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px">
            <li>
              <button
                onClick={() => togglePagination(1)}
                className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {iconPrevious}
                </svg>
              </button>
            </li>
            <li>
              <button
                onClick={() => togglePagination(2)}
                className={
                  togglePag === 2
                    ? 'py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                    : 'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                }
              >
                1
              </button>
            </li>
            <li>
              <button
                onClick={() => togglePagination(3)}
                className={
                  togglePag === 3
                    ? 'py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                    : 'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                }
              >
                2
              </button>
            </li>
            <li>
              <button
                onClick={() => togglePagination(4)}
                className={
                  togglePag === 4
                    ? 'py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                    : 'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                }
              >
                3
              </button>
            </li>
            <li>
              <button
                onClick={() => togglePagination(5)}
                className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                    {iconNext}
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

Pagination.propTypes = {
  isDefault: PropTypes.bool,
  isIcon: PropTypes.bool,
  begin: PropTypes.string,
  end: PropTypes.string,
  iconPrevious: PropTypes.element,
  iconNext: PropTypes.element,
};
