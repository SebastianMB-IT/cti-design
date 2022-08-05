/**
 * It can be used to render a Rounded Avatar.
 *
 * @param {string} color The color of the Badge.
 * @param {element} icon The icon to render.
 * @param {string} badgeMessage The message to render.
 * @param {boolean} isLarge Whether the Badge is large.
 * @param {boolean} isDefault Whether the Badge is default.
 * @param {boolean} isIcon Whether the Badge is icon.
 * @param {boolean} isNotification Whether the Badge is notification.
 * @param {boolean} isOnlyIcon Whether the Badge is only icon.
 */

import React from 'react';
import PropTypes from 'prop-types';

export const Badge = ({
  icon,
  backgroundColor,
  color,
  isLarge,
  isDefault,
  isIcon,
  isNotification,
  isOnlyIcon,
  badgeMessage,
}) => {
  return (
    <div>
      {isLarge && (
        <span
          className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
          style={color && { color }}
        >
          {badgeMessage}
        </span>
      )}
      {isDefault && (
        <span
          className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
          style={color && { color }}
        >
          {badgeMessage}
        </span>
      )}
      {isIcon && (
        <span
          className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300"
          style={color && { color }}
        >
          <span
            aria-hidden="true"
            className="mr-1 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            {icon}
          </span>
          {badgeMessage}
        </span>
      )}
      {isNotification && (
        <button
          type="button"
          className="inline-flex relative items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          style={backgroundColor && { backgroundColor }}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            {icon}
          </svg>
          <div
            className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900"
            style={color && { color }}
          >
            {badgeMessage}
          </div>
        </button>
      )}
      {isOnlyIcon && (
        <span className="bg-gray-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-300" style={backgroundColor && {backgroundColor}}>
          <svg
            aria-hidden="true"
            className="w-3.5 h-3.5"
            fill="currentColor"
            viewBox="0 -1.5 18 20"
          >
            {icon}
          </svg>
        </span>
      )}
    </div>
  );
};

Badge.propTypes = {
  icon: PropTypes.element,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  isLarge: PropTypes.bool,
  isDefault: PropTypes.bool,
  isIcon: PropTypes.bool,
  isNotification: PropTypes.bool,
  isOnlyIcon: PropTypes.bool,
};
