import React from 'react';
// import Profile from '/src/Images/profilePicture.jpg';
// import PropTypes from 'prop-types';

export const Avatar = props => {
  return (
    <div>
      <img
        className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        src='https://picsum.photos/200/300/?blur'
        alt="Profile picture"
      />
    </div>
  );
};

// Avatar.propTypes = {};