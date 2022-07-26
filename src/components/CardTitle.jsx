import React from 'react';
import PropTypes from 'prop-types';

export const CardTitle = ({ title }) => {
  return <div class="font-bold text-xl mb-2"> {title} </div>;
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
CardTitle.defaultProps = {
  title: 'Name',
};
