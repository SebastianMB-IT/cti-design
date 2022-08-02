/**
 * It can be used to render a message of success, warning or error.
 *
 * @param {string} alertType The alert type to render.
 * @param {string} alertTitle The title of the alert to render.
 * @param {string} icon The icon to render.
 * @param {string} color The color of the alert.
 * @param {string} backgroundColor The background color of the alert.
 */

import React from 'react';
import PropTypes from 'prop-types';

export const Alert = ({
  alertTitle,
  alertType,
  icon,
  color,
  backgroundColor,
}) => {
  return (
    <div class="flex overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div
        class="flex items-center justify-center w-12 bg-emerald-500"
        style={backgroundColor && { backgroundColor }}
      >
        <span className="text-xl mx-1 text-white">{icon}</span>
      </div>

      <div class="px-4 py-2 -mx-3">
        <div class="mx-3">
          <span class="font-semibold" style={color && { color }}>
            {alertTitle}
          </span>
          <p class="text-sm text-gray-600 dark:text-gray-200">{alertType}</p>
        </div>
      </div>
    </div>
  );
};

Alert.propTypes = {
  alertTitle: PropTypes.string.isRequired,
  alertType: PropTypes.string.isRequired,
  icon: PropTypes.element,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};
Alert.defaultProps = {
  alertType: 'Here will go all the necessary for the alert type',
};
