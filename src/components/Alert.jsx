import React from 'react';
import PropTypes from 'prop-types';

export const Alert = ({ alertType, alertContent, backgroundColor}) => {
    return (
      <div className="flex flex-wrap justify-center">
        <div
          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg
                     dark:bg-red-200 dark:text-red-800 w-40 border-4 border-red-200"
          role="alert" style={backgroundColor && {backgroundColor}}
        >
          <span className="font-medium">{alertType}</span> <br></br>{alertContent}
        </div>
      </div>
    );
};

Alert.propTypes = {
  alertType: PropTypes.string.isRequired,
  alertContent: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};
Alert.defaultProps = {
  alertType: "Here will go all the necessary for the alert type",
  alertContent: "Here will go all the information about the error",
};
