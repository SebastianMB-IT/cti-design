/**
 * It can be used to render a label with an icon.
 *
 * @param {string} children The children/s to render.
 * @param {string} size The button size.
 * @param {string} type The type of the button to render.
 * @param {string} fullRounded The burder full radius property.
 * 
 */

import React, { ComponentProps ,FC, ReactNode } from 'react';
import classNames from 'classnames';
import { useTheme } from '../../theme/Context'

export interface ButtonProps extends Omit<ComponentProps<'button'>, 'className' | 'color'> {
  children: ReactNode; 
  size?: 'base' | 'large';
  styles: 'primary' | 'secondary' | 'white' | 'red';
  fullRounded?: boolean;
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
  children,
  size,
  styles,
  fullRounded,
  disabled,
  ...props
}): JSX.Element => {
  const { button : buttonTheme } = useTheme().theme
  return (
    <button className={classNames(
        buttonTheme.base,
        buttonTheme[styles],
        fullRounded ? buttonTheme.fullRounded : buttonTheme.rounded,
        (typeof size === 'undefined' || size === 'base') && buttonTheme.size.base,
        size === 'large' && buttonTheme.size.large,
      )} 
      disabled={disabled}
      {...props}
    >
      {typeof children !== 'undefined' && children}
    </button>
  );
};
 