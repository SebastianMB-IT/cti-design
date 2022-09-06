/**
 * It can be used to render a label with an icon.
 *
 * @param children - The children/s to render.
 * @param size - The button size.
 * @param type - The type of the button to render.
 * @param fullRounded - The burder full radius property.
 *
 */

import React, { ComponentProps, FC, ReactNode } from 'react';
import classNames from 'classnames';
import { useTheme } from '../../theme/Context';

export interface ButtonProps
  extends Omit<ComponentProps<'button'>, 'className' | 'color' | 'style'> {
  children?: ReactNode;
  size?: 'base' | 'large';
  style?: 'primary' | 'secondary' | 'white' | 'red';
  disabled?: boolean;
  fullRounded?: boolean;
  fullWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export const Button: FC<ButtonProps> = ({
  children,
  size,
  style = 'primary',
  disabled,
  fullRounded,
  fullWidth,
  ...props
}): JSX.Element => {
  const { button: theme } = useTheme().theme;
  return (
    <button
      className={classNames(
        theme.base,
        theme[style],
        fullRounded ? theme.fullRounded : theme.rounded,
        (typeof size === 'undefined' || size === 'base') &&
          theme.size.base,
        size === 'large' && theme.size.large,
        fullWidth && theme.size.full[fullWidth]
      )}
      disabled={disabled}
      {...props}
    >
      {typeof children !== 'undefined' && children}
    </button>
  );
};
