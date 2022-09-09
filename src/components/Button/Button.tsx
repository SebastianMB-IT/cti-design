/**
 * 
 * It can be used to render a label with an icon.
 *
 * @param children - The children/s to render.
 * @param size - The button size.
 * @param variant - The variant of the button to render.
 * @param disabled - The disabled properti of the button.
 * @param rounded - The burder full radius property.
 *
 */

import React, { ComponentPropsWithRef, forwardRef } from 'react';
import classNames from 'classnames';
import { useTheme } from '../../theme/Context';

export interface ButtonProps
  extends Omit<ComponentPropsWithRef<'button'>, 'className' | 'color' | 'style'> {
  size?: 'base' | 'large';
  variant?: 'primary' | 'secondary' | 'light' | 'danger';
  disabled?: boolean;
  rounded?: 'base' | 'full';
  squared?: 'left' | 'right' | 'top' | 'bottom';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps> (({
  children,
  size,
  variant = 'primary',
  disabled,
  rounded = 'base',
  squared,
  ...props
}, ref): JSX.Element => {
  const { button: theme } = useTheme().theme;
  return (
    <button
      className={classNames(
        theme.base,
        theme[variant],
        rounded === 'full' ? theme.rounded.full : theme.rounded.base,
        squared ? theme.squared[squared] : '',
        (typeof size === 'undefined' || size === 'base') &&
          theme.sizes.base,
        size === 'large' && theme.sizes.large
      )}
      disabled={disabled}
      {...props}
      ref={ref}
    >
      {typeof children !== 'undefined' && children}
    </button>
  );
})
