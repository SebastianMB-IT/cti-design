/**
 * It can be used to render a Card.
 *
 * @param {string} content The content to render.
 * @param {string} backgroundColor The background color of the Card.
 */

import React, { ComponentProps, FC} from 'react'

export interface CardProps extends Omit<ComponentProps<'div'>, 'className'> {
  content?: string;
  backgroundColor?: string;
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div>
      <a
        className='block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
      >
        {children}
      </a>
    </div>
  )
}
