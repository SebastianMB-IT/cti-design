/**
 * It can be used to render a Rounded Avatar.
 *
 * @param {element} icon The icon to render.
 * @param {string} elementList1 The first element of the ListGroup.
 * @param {string} elementList2 The second element of the ListGroup.
 * @param {string} elementList3 The third element of the ListGroup.
 * @param {element} iconElementList1 The first icon of the ListGroup.
 * @param {element} iconElementList2 The second icon of the ListGroup.
 * @param {element} iconElementList3 The third icon of the ListGroup.
 */

import React from 'react';
import PropTypes from 'prop-types';

export const ListGroup = ({
  iconElementList1,
  iconElementList2,
  iconElementList3,
  isDefault,
  isLink,
  isButton,
  isIcon,
  elementList1,
  elementList2,
  elementList3,
}) => {
  return (
    <div>
      {isDefault && (
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
            {elementList1}
          </li>
          <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
            {elementList2}
          </li>
          <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
            {elementList3}
          </li>
        </ul>
      )}
      {isLink && (
        <div className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <a
            href="#"
            aria-current="true"
            className="block py-2 px-4 w-full text-white bg-blue-700 rounded-t-lg border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600"
          >
            {elementList1}
          </a>
          <a
            href="#"
            className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            {elementList2}
          </a>
          <a
            href="#"
            className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            {elementList3}
          </a>
        </div>
      )}
      {isButton && (
        <div className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <button
            aria-current="true"
            type="button"
            className="py-2 px-4 w-full font-medium text-left text-white bg-blue-700 rounded-t-lg border-b border-gray-200 cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600"
          >
            {elementList1}
          </button>
          <button
            type="button"
            className="py-2 px-4 w-full font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            {elementList2}
          </button>
          <button
            type="button"
            className="py-2 px-4 w-full font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            {elementList3}
          </button>
        </div>
      )}
      {isIcon && (
        <div className="w-48 text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <button
            type="button"
            className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium rounded-t-lg border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            <svg
              aria-hidden="true"
              className="mr-2 w-4 h-4 fill-current"
              fill="currentColor"
              viewBox="-1 0 20 20"
            >
              {iconElementList1}
            </svg>
            {elementList1}
          </button>
          <button
            xmlns="http://www.w3.org/2000/svg"
            type="button"
            className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            <svg
              aria-hidden="true"
              className="mr-2 w-4 h-4 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {iconElementList2}
            </svg>
            {elementList2}
          </button>
          <button
            type="button"
            className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            <svg
              aria-hidden="true"
              className="mr-2 w-4 h-4 fill-current"
              fill="currentColor"
              viewBox="0 -2 20 20"
            >
              {iconElementList3}
            </svg>
            {elementList3}
          </button>
        </div>
      )}
    </div>
  );
};

ListGroup.propTypes = {
  icon: PropTypes.element,
  elementList1: PropTypes.element,
  elementList2: PropTypes.element,
  elementList3: PropTypes.element,
};
