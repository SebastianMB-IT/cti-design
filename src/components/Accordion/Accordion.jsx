/**
 * It can be used to render a message of success, warning or error.
 *
 * @param {string} AccordionType The Accordion type to render.
 * @param {string} AccordionTitle The title of the Accordion to render.
 * @param {element} icon The icon to render.
 * @param {bool} isAction Indicate if the Accordion has action.
 * @param {bool} isBorder Indicate if the Accordion has border.
 * @param {bool} isSimple Indicate if the Accordion is simple.
 * @param {element} iconButton The icon for the close button.
 */

import React from 'react'
import PropTypes from 'prop-types'

export const Accordion = ({
  accordion1Title,
  accordion2Title,
  accordion3Title,
  accordion1Type,
  accordion2Type,
  accordion3Type,
  icon,
  isSimple,
  isBorder,
  isFlush,
  button1Title,
  button2Title,
}) => {
  return (
    <div>
      {isSimple && (
        <div id='accordion-collapse' data-accordion='collapse'>
          <h2 id='accordion-collapse-heading-1'>
            <button
              type='button'
              className='flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              data-accordion-target='#accordion-collapse-body-1'
              aria-expanded='true'
              aria-controls='accordion-collapse-body-1'
            >
              <span>{accordion1Title}</span>
              <svg
                data-accordion-icon
                className='w-6 h-6 rotate-180 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id='accordion-collapse-body-1'
            className='hidden'
            aria-labelledby='accordion-collapse-heading-1'
          >
            <div className='p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>{accordion1Type}</p>
            </div>
          </div>
          <h2 id='accordion-collapse-heading-2'>
            <button
              type='button'
              className='flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              data-accordion-target='#accordion-collapse-body-2'
              aria-expanded='false'
              aria-controls='accordion-collapse-body-2'
            >
              <span>{accordion2Title}</span>
              <svg
                data-accordion-icon
                className='w-6 h-6 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id='accordion-collapse-body-2'
            className='hidden'
            aria-labelledby='accordion-collapse-heading-2'
          >
            <div className='p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>{accordion2Type}</p>
            </div>
          </div>
          <h2 id='accordion-collapse-heading-3'>
            <button
              type='button'
              className='flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              data-accordion-target='#accordion-collapse-body-3'
              aria-expanded='false'
              aria-controls='accordion-collapse-body-3'
            >
              <span>{accordion3Title}</span>
              <svg
                data-accordion-icon
                className='w-6 h-6 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id='accordion-collapse-body-3'
            className='hidden'
            aria-labelledby='accordion-collapse-heading-3'
          >
            <div className='p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>{accordion3Type}</p>
            </div>
          </div>
        </div>
      )}
      {isBorder && (
        <div
          id='accordion-color'
          data-accordion='collapse'
          data-active-classes='bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white'
        >
          <h2 id='accordion-color-heading-1'>
            <button
              type='button'
              className='flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800'
              data-accordion-target='#accordion-color-body-1'
              aria-expanded='true'
              aria-controls='accordion-color-body-1'
            >
              <span>{accordion1Title}</span>
              <svg
                data-accordion-icon
                className='w-6 h-6 rotate-180 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id='accordion-color-body-1'
            className='hidden'
            aria-labelledby='accordion-color-heading-1'
          >
            <div className='p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>{accordion1Type}</p>
            </div>
          </div>
          <h2 id='accordion-color-heading-2'>
            <button
              type='button'
              className='flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800'
              data-accordion-target='#accordion-color-body-2'
              aria-expanded='false'
              aria-controls='accordion-color-body-2'
            >
              <span>{accordion2Title}</span>
              <svg
                data-accordion-icon
                className='w-6 h-6 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id='accordion-color-body-2'
            className='hidden'
            aria-labelledby='accordion-color-heading-2'
          >
            <div className='p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>{accordion2Type}</p>
            </div>
          </div>
          <h2 id='accordion-color-heading-3'>
            <button
              type='button'
              className='flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800'
              data-accordion-target='#accordion-color-body-3'
              aria-expanded='false'
              aria-controls='accordion-color-body-3'
            >
              <span>{accordion3Title}</span>
              <svg
                data-accordion-icon
                className='w-6 h-6 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id='accordion-color-body-3'
            className='hidden'
            aria-labelledby='accordion-color-heading-3'
          >
            <div className='p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>{accordion3Type}</p>
            </div>
          </div>
        </div>
      )}
      {isFlush && (
        <div
          id='accordion-flush'
          data-accordion='collapse'
          data-active-classes='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
          data-inactive-classes='text-gray-500 dark:text-gray-400'
        >
          <h2 id='accordion-flush-heading-1'>
            <button
              type='button'
              className='flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
              data-accordion-target='#accordion-flush-body-1'
              aria-expanded='true'
              aria-controls='accordion-flush-body-1'
            >
              <span>{accordion1Title}</span>
              <svg
                data-accordion-icon
                className='w-6 h-6 rotate-180 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id='accordion-flush-body-1'
            className='hidden'
            aria-labelledby='accordion-flush-heading-1'
          >
            <div className='py-5 font-light border-b border-gray-200 dark:border-gray-700'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>{accordion1Type}</p>
            </div>
          </div>
          <h2 id='accordion-flush-heading-2'>
            <button
              type='button'
              className='flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
              data-accordion-target='#accordion-flush-body-2'
              aria-expanded='false'
              aria-controls='accordion-flush-body-2'
            >
              <span>{accordion2Title}</span>
              <svg
                data-accordion-icon
                className='w-6 h-6 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id='accordion-flush-body-2'
            className='hidden'
            aria-labelledby='accordion-flush-heading-2'
          >
            <div className='py-5 font-light border-b border-gray-200 dark:border-gray-700'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>{accordion2Type}</p>
            </div>
          </div>
          <h2 id='accordion-flush-heading-3'>
            <button
              type='button'
              className='flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
              data-accordion-target='#accordion-flush-body-3'
              aria-expanded='false'
              aria-controls='accordion-flush-body-3'
            >
              <span>{accordion3Title}</span>
              <svg
                data-accordion-icon
                className='w-6 h-6 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id='accordion-flush-body-3'
            className='hidden'
            aria-labelledby='accordion-flush-heading-3'
          >
            <div className='py-5 font-light border-b border-gray-200 dark:border-gray-700'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>{accordion3Type}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

Accordion.propTypes = {
  accordion1Title: PropTypes.string,
  accordion2Title: PropTypes.string,
  accordion3Title: PropTypes.string,
  accordion1Type: PropTypes.string,
  accordion2Type: PropTypes.string,
  accordion3Type: PropTypes.string,
  icon: PropTypes.element,
  iconButton: PropTypes.element,
  isSimple: PropTypes.bool,
  isBorder: PropTypes.bool,
  isFlush: PropTypes.bool,
  button1Title: PropTypes.string,
  button2Title: PropTypes.string,
}
Accordion.defaultProps = {}
