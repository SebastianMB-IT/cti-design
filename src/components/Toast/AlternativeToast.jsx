/**
 * It can be used to render a message of success, warning or error.
 *
 * @param {string} alertType The alert type to render.
 * @param {string} alertTitle The title of the alert to render.
 * @param {element} icon The icon to render.
 * @param {string} color The color of the alert.
 * @param {string} backgroundColor The background color of the alert.
 * @param {bool} isClosable Indicate if the alert can be closed.
 * @param {element} iconClose The icon for the close button.
 */

import React from 'react';
import PropTypes from 'prop-types';

export const AlternativeToast = ({
  alertTitle,
  alertType,
  icon,
  color,
  backgroundColor,
  isClosable,
  iconClose,
}) => {
  return (
    <div>
      {isClosable && (
        <div class="w-full text-white bg-emerald-500">
          <div class="container flex items-center justify-between px-6 py-4 mx-auto">
            <div class="flex">
              <span className="w-6 h-6 fill-current text-2xl justify-center text-white">
                {icon}
              </span>

              <p class="mx-3">{alertTitle}</p>
            </div>

            <button class="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none text-xl">
              {iconClose}
            </button>
          </div>
        </div>
      )}
      {!isClosable && (
        <div class="flex overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div
            class="flex items-center justify-center w-12 bg-emerald-500"
            style={backgroundColor && { backgroundColor }}
          >
            <span className="text-xl mx-1 text-white">{icon}</span>
          </div>

          <div class="px-4 py-2 -mx-3 justify-between">
            <div class="mx-3">
              <span class="font-semibold" style={color && { color }}>
                {alertTitle}
              </span>
              <p class="text-sm text-gray-600 dark:text-gray-200">
                {alertType}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

AlternativeToast.propTypes = {
  alertTitle: PropTypes.string.isRequired,
  alertType: PropTypes.string.isRequired,
  icon: PropTypes.element,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  isClosable: PropTypes.bool,
  iconClose: PropTypes.element,
};
AlternativeToast.defaultProps = {
  alertType: 'Here will go all the necessary for the alert type',
};
