/**
 * It can be used to render a message of success, warning or error.
 *
 * @param {string} alertType The alert type to render.
 * @param {string} alertTitle The title of the alert to render.
 * @param {element} icon The icon to render.
 * @param {bool} isAction Indicate if the alert has action.
 * @param {bool} isBorder Indicate if the alert has border.
 * @param {bool} isSimple Indicate if the alert is simple.
 * @param {element} iconButton The icon for the close button.
 */

import React from 'react'
import PropTypes from 'prop-types'

export const Alert = ({
  alertTitle,
  alertType,
  icon,
  iconButton,
  color,
  backgroundColor,
  isAction,
  isBorder,
  isSimple,
  button1Title,
  button2Title,
}) => {
  return (
    <div>
      {isAction && (
        <div
          id='alert-additional-content-1'
          className='p-4 mb-4 border border-blue-300 rounded-lg bg-blue-50 dark:bg-blue-300'
          role='alert'
        >
          <div className='flex items-center'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 mr-2 text-blue-900'
              fill='currentColor'
              viewBox='0 0 20 25'
            >
              {icon}
            </svg>
            <h3 className='text-lg font-medium text-blue-900'>{alertTitle}</h3>
          </div>
          <div className='mt-2 mb-4 text-sm text-blue-900'>{alertType}</div>
          <div className='flex'>
            <button
              type='button'
              className='text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-800 dark:hover:bg-blue-900'
            >
              <svg
                aria-hidden='true'
                className='-ml-0.5 mr-2 h-4 w-4'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                {iconButton}
              </svg>
              {button1Title}
            </button>
            <button
              type='button'
              className='text-blue-900 bg-transparent border border-blue-900 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-blue-800 dark:text-blue-800 dark:hover:text-white'
              data-dismiss-target='#alert-additional-content-1'
              aria-label='Close'
            >
              {button2Title}
            </button>
          </div>
        </div>
      )}
      {isBorder && (
        <div
          id='alert-border-1'
          className='flex p-4 mb-4 bg-blue-100 border-t-4 border-blue-500 dark:bg-blue-200'
          role='alert'
        >
          <svg
            className='flex-shrink-0 w-5 h-5 text-blue-700'
            fill='currentColor'
            viewBox='0 0 20 25'
          >
            {icon}
          </svg>
          <div className='ml-3 text-sm font-medium text-blue-700'>{alertType}</div>
        </div>
      )}
      {isSimple && (
        <div
          id='alert-1'
          className='flex p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200'
          role='alert'
        >
          <svg
            aria-hidden='true'
            className='flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-800'
            fill='currentColor'
            viewBox='0 0 20 25'
          >
            {icon}
          </svg>
          <div className='ml-3 text-sm font-medium text-blue-700 dark:text-blue-800'>
            {alertType}
          </div>
        </div>
      )}
    </div>
  )
}

Alert.propTypes = {
  alertTitle: PropTypes.string.isRequired,
  alertType: PropTypes.string.isRequired,
  icon: PropTypes.element,
  iconButton: PropTypes.element,
  isAction: PropTypes.bool,
  isSimple: PropTypes.bool,
  isBorder: PropTypes.bool,
  button1Title: PropTypes.string,
  button2Title: PropTypes.string,
}
Alert.defaultProps = {
  alertType: 'Here will go all the necessary for the alert type',
}
