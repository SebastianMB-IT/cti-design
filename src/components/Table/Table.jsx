/**
 * It can be used to render a Table.
 *
 * @param {string} color The color of the font of the header of the table.
 * @param {string} backgroundColor The background color of the header of the table.
 * @param {string} header1 The first header of the table.
 * @param {string} header2 The second header of the table.
 * @param {string} header3 The third header of the table.
 * @param {array} rows The rows of the table.
 * @param {string} index The index of the row.
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

const renderRows = (rows, index) => {
  return (
    <tr key={index} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
      <td className='py-4 px-6'>{rows.column1}</td>
      <td className='py-4 px-6'>{rows.column2}</td>
      <td className='py-4 px-6'>{rows.column3}</td>
    </tr>
  )
}

export const Table = ({ backgroundColor, color, index, rows, header1, header2, header3 }) => {
  return (
    <div className='overflow-x-auto relative'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead
          className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'
          style={backgroundColor && { backgroundColor }}
        >
          <tr style={color && { color }}>
            <th scope='col' className='py-3 px-6'>
              {header1}
            </th>
            <th scope='col' className='py-3 px-6'>
              {header2}
            </th>
            <th scope='col' className='py-3 px-6'>
              {header3}
            </th>
          </tr>
        </thead>
        <tbody>{rows.map(renderRows)}</tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  rows: PropTypes.array,
  header1: PropTypes.string,
  header2: PropTypes.string,
  header3: PropTypes.string,
}
