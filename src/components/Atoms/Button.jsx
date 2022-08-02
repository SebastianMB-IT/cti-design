/**
 * It can be used to render a Button to the user.
 *
 * @param {string} label The label to render.
 * @param {string} backgroundColor The background color of the Button.
 * @param {bool} login The login state of the Button.
 */

import React from 'react';
import PropTypes from 'prop-types';
export const Button = ({ login, backgroundColor, label }) => {
  return (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4
                                    focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 
                                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-40"
      style={backgroundColor && { backgroundColor }}
    >
      {label}
    </button>
  );
};
Button.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  login: PropTypes.bool,
};
Button.defaultProps = {
  login: false,
};
