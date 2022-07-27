/**
 * It can be used to render a Card subtitle.
 *
 * @param {string} subtitle The content of the card subtitle to render.
 */

import React from 'react';
import PropTypes from 'prop-types';

export const CardSubtitle = ({ subtitle }) => {
  return <p class="text-gray-700 text-base"> {subtitle} </p>;
};

CardSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};
CardSubtitle.defaultProps = {
  subtitle: 'Name',
};
