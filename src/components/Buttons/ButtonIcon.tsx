/** 
 * It can be used to render a label with an icon.
 * 
 * @param {string} label The label to render.
 * @param {string} icon The icon to render.
 * @param {string} iconPosition The position of the icon.
 */

import React from 'react';
import classNames from 'classnames';

type ButtonIconProps = {
  label: string;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
}

export const ButtonIcon = ({label, icon, iconPosition}: ButtonIconProps) : JSX.Element => {

  const classes = classNames({
    'flex content-center items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80': true,
    'flex-row-reverse': iconPosition === 'right'
  });

  return (
    <button className={classes}>
      <span className="text-xl mx-1">
        {icon}
      </span>
      <span className="text-base mx-1">
        {label}
      </span>
    </button>
  )

};
