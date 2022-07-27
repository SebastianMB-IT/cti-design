import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ section1, section2, section3 }) => {
  return (
    <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      <div className="mr-2">
        <div
          aria-current="page"
          className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
        >
          {section1}
        </div>
        <div className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
          {section2}
        </div>
        <div className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
          {section3}
        </div>
      </div>
    </div>
  );
};

Tab.propTypes = {
  section1: PropTypes.string.isRequired,
  section2: PropTypes.string.isRequired,
  section3: PropTypes.string.isRequired,
};
Tab.defaultProps = {
  Section1: 'Commercial',
};
