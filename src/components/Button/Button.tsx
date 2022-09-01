/**
 * It can be used to render a label with an icon.
 *
 * @param {string} label The label to render.
 * @param {string} size The button size.
 * @param {string} icon The icon to render.
 * @param {string} iconPosition The position of the icon.
 */

import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { useTheme } from '../../theme/Context'

interface ButtonProps {
  children: ReactNode; 
  label: string;
  size?: 'base' | 'large'
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  type: 'primary' | 'secondary' | 'white';
};

export const Button: FC<ButtonProps> = ({
  children,
  label,
  size,
  type
}): JSX.Element => {
  const { button : buttonTheme } = useTheme().theme
  return (
    <button className={classNames(
      buttonTheme.base,
      buttonTheme[type],
      'flex-row-reverse',
      size === 'base' && buttonTheme.size.base,
      size === 'large' && buttonTheme.size.large,
    )}>
      {children && children}
      {typeof label !== 'undefined' && (
        <span>{label}</span>
      )}
    </button>
  );
};
 