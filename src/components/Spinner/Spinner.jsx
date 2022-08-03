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
    <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" style={color && {color}}>
      {icon}
    </svg>
  );
};

Spinner.propTypes = {
  icon: PropTypes.element,
  color: PropTypes.string,
};
