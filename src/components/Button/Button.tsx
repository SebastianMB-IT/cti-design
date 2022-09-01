/**
 * It can be used to render a label with an icon.
 *
 * @param {string} children The children/s to render.
 * @param {string} size The button size.
 * @param {string} type The type of the button to render.
 * @param {string} fullRounded The burder full radius property.
 * 
 */

import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { useTheme } from '../../theme/Context'

interface ButtonProps {
  children: ReactNode; 
  size?: 'base' | 'large'
  type: 'primary' | 'secondary' | 'white';
  fullRounded?: boolean 
};

export const Button: FC<ButtonProps> = ({
  children,
  size,
  type,
  fullRounded
}): JSX.Element => {
  const { button : buttonTheme } = useTheme().theme
  return (
    <button className={classNames(
      buttonTheme.base,
      buttonTheme[type],
      fullRounded ? buttonTheme.fullRounded : buttonTheme.rounded,
      typeof size === 'undefined' || size === 'base' && buttonTheme.size.base,
      size === 'large' && buttonTheme.size.large,
    )}>
      {typeof children !== 'undefined' && children}
    </button>
  );
};
 