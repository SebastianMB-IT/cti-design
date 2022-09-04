/**
 * It can be used to render a Toast.
 *
 * @param {element} icon The icon to render.
 * @param {string} toastMessage The message to render.
 * @param {element} closeIcon The close icon to render.
 * @param {boolean} isText Whether the toast is text or not.
 * @param {boolean} isIcon Whether the toast is icon or not.
 * @param {boolean} isSimple Whether the toast is simple or not.
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

export const Toast = ({ icon, isIcon, isSimple, isText, toastMessage, closeIcon }) => {
  return (
    <div>
      {isIcon && (
        <div
          id='toast-default'
          className='flex items-center p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800'
          role='alert'
        >
          <div className='inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200'>
            <span className='text-xl mx-1 text-white'>{icon}</span>
          </div>
          <div className='ml-3 text-sm font-normal'>{toastMessage}</div>
          <button
            type='button'
            className='ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
            data-dismiss-target='#toast-default'
            aria-label='Close'
          >
            <span className='sr-only'>Close</span>
            <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
              {closeIcon}
            </svg>
          </button>
        </div>
      )}
      {isText && (
        <div
          id='toast-text'
          className='flex items-center p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800'
          role='alert'
        >
          <div className='ml-3 text-sm font-normal'>{toastMessage}</div>
          <button
            type='button'
            className='ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
            data-dismiss-target='#toast-text'
            aria-label='Close'
          >
            <span className='sr-only'>Close</span>
            <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
              {closeIcon}
            </svg>
          </button>
        </div>
      )}
      {isSimple && (
        <div
          id='toast-simple'
          className='flex items-center p-4 space-x-4 w-full max-w-xs text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800'
          role='alert'
        >
          <span className='w-5 h-5 text-xl text-blue-600 dark:text-blue-500' viewBox='0 0 512 512'>
            {' '}
            {icon}
          </span>
          <div className='pl-4 text-sm font-normal'>{toastMessage}</div>
        </div>
      )}
    </div>
  )
}

Toast.propTypes = {
  icon: PropTypes.element,
  isIcon: PropTypes.bool,
  isSimple: PropTypes.bool,
  isText: PropTypes.bool,
  toastMessage: PropTypes.string,
  color: PropTypes.string,
}
