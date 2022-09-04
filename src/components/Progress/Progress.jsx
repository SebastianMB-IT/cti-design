/**
 * It can be used to render a Rounded Progress.
 *
 * @param {bool} isRounded Indicate if the Progress will be rounded.
 * @param {bool} isSquared Indicate if the Progress will be squared.
 */

import React from 'react'
// import Profile from '/src/Images/profilePicture.jpg';
import PropTypes from 'prop-types'

export const Progress = ({ progressPercentage }) => {
  return (
    <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-2.5 rounded-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-green-600'}`}
      ></div>
    </div>
  )
}

Progress.propTypes = {
  progressPercentage: PropTypes.number.isRequired,
}
