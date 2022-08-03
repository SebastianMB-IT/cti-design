/**
 * It can be used to render a Rounded Avatar.
 *
 * @param {string} color The color of the spinner.
 * @param {element} icon The icon to render.
 */

import React from 'react';
import PropTypes from 'prop-types';

export const Spinner = ({ icon, color}) => {
  return (
    <svg class="animate-spin h-4 w-4" style={color && {color}}>
      {icon}
    </svg>
  );
};

Spinner.propTypes = {
  icon: PropTypes.element,
  color: PropTypes.string,
};
