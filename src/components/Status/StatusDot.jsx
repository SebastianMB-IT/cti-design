/**
 * It can be used to render a Dot to represent the status.
 *
 * @param {string} background Used to choose a background color.
 */

import React from 'react'
import PropTypes from 'prop-types'

export const StatusDot = ({ backgroundColor }) => {
  return (
    <span
      className='top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full'
      style={backgroundColor && { backgroundColor }}
    ></span>
  )
}

StatusDot.propTypes = {
  backgroundColor: PropTypes.string,
}
