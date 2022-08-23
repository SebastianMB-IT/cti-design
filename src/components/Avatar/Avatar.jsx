/**
 * It can be used to render a Rounded Avatar.
 *
 * @param {bool} isRounded Indicate if the avatar will be rounded.
 * @param {bool} isSquared Indicate if the avatar will be squared.
 */

import React from 'react';
// import Profile from '/src/Images/profilePicture.jpg';
import PropTypes from 'prop-types';

export const Avatar = ({ isRounded, isSquared }) => {
  return (
    <div>
      {isRounded && (
        <img
          className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://picsum.photos/200/300/?blur"
          alt="Rounded avatar"
        />
      )}
      {isSquared && (
        <img
          class="w-10 h-10 rounded"
          src="https://picsum.photos/200/300/?blur"
          alt="Squared avatar"
        />
      )}
    </div>
  );
};

Avatar.propTypes = {
  isRounded: PropTypes.bool,
  isSquared: PropTypes.bool,
};
