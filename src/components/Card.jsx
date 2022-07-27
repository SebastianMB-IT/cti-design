/**
 * It can be used to show a message of success, warning or error.
 *
 * @param {string} content The content to render.
 * @param {string} backgroundColor The background color of the Card.
 */

import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ content, backgroundColor }) => {
  return (
    <div>
      <a
        className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        style={backgroundColor && { backgroundColor }}
      >
        {content}
      </a>
    </div>
  );
};
Card.propTypes = {
  content: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};
