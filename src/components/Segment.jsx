import React from 'react';
import PropTypes from 'prop-types';

export const Segment = ({ segmentContent, backgroundColor }) => {
  return (
    <div className="flex flex-wrap justify-center">
      <a
        href="#"
        class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100
             dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        style={backgroundColor && { backgroundColor }}
      >
        {segmentContent}
      </a>
    </div>
  );
};

Segment.propTypes = {
  segmentContent: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};
Segment.defaultProps = {
  segmentContent: 'Here will go all the necessary for the segment content',
};
