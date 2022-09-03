/**
 * It renders input fields.
 *
 * @param {string} label The label to render.
 * @param {string} placeholder The placeholder to render.
 * 
 */

import React, { ComponentProps ,FC ,forwardRef } from 'react';
import { clearClassName } from '../../helper/clear'
import { useTheme } from '../../theme/Context'
import classNames from 'classnames';

export interface TextInputProps extends Omit<ComponentProps<'input'>, 'ref' | 'color' | 'className'> {
  label?: string;
  icon?: FC<ComponentProps<'svg'>>;
  iconRight: boolean;
  iconAction: boolean;
  error: boolean,
  helper: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
    label,
    placeholder,
    icon: Icon,
    iconRight,
    type='text',
    error,
    helper,
    ...props
  }, ref) => {
    const clearProps = clearClassName(props)
    const { input: theme } = useTheme().theme
    return (
      <div>
        {label && (
          <label className={theme.label}>
            {label}
          </label>
        )}
        <div className='relative'>
          {Icon && (
            <div className={classNames(
              theme.icon,
              iconRight ? theme.iconRight : theme.iconLeft
            )}>
              <Icon className='h-5 w-5 text-gray-500'/>
            </div>
          )}
          <input
            type={type}
            placeholder={placeholder}
            className={classNames(
              theme.text,
              !error ? theme.colors.gray : theme.colors.error,
              (Icon && !iconRight) && 'pl-10'
            )}
            {...clearProps}
            ref={ref}
          />
        </div>
        {helper && (
          <p className={theme.helper}>
            {helper}
          </p>
        )}
      </div>
    );
  }
)
