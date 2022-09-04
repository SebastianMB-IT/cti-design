/**
 * It can be used to render a Card title.
 *
 * @param {string} subtitle The content of the card title to render.
 */

import React from 'react'
import PropTypes from 'prop-types'

export const CardTitle = ({ title }) => {
  return <div className='font-bold text-xl mb-2'> {title} </div>
}

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
}
CardTitle.defaultProps = {
  title: 'Name',
}
