/**
 * It renders an input fields.
 *
 * @param label - The label to render.
 * @param placeholder - The placeholder to render.
 * @param icon - The icon to show.
 * @param iconRight - The position of the icon.
 * @param error - The position of the icon.
 * @param helper - The text of the helper.
 * @param size - The size of the input.
 * @param squared - The radius of the border.
 * @param onIconClick - The callback on icon click.
 *
 */

import React, { ComponentProps, FC, forwardRef } from 'react';
import { cleanClassName } from '../../helper/clean';
import { useTheme } from '../../theme/Context';
import classNames from 'classnames';

export interface TextInputProps
  extends Omit<
    ComponentProps<'input'>,
    'ref' | 'color' | 'className' | 'size'
  > {
  label?: string;
  icon?: FC<ComponentProps<'svg'>>;
  iconRight?: boolean;
  error?: boolean;
  helper?: string;
  size?: 'base' | 'large';
  squared?: 'left' | 'right' | 'top' | 'bottom';
  onIconClick?: () => void;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      placeholder,
      icon: Icon,
      iconRight,
      type = 'text',
      error,
      helper,
      size,
      squared,
      onIconClick,
      ...props
    },
    ref
  ) => {
    const cleanProps = cleanClassName(props);
    const { input: theme } = useTheme().theme;
    return (
      <div>
        {label && <label className={theme.label}>{label}</label>}
        <div className="relative">
          {Icon && (
            <div
              className={classNames(
                theme.icon.base,
                iconRight ? theme.icon.right : theme.icon.left
              )}
            >
              <Icon
                className={classNames(
                  size === 'large'
                    ? theme.icon.size.large
                    : theme.icon.size.base,
                  error ? theme.icon.red : theme.icon.gray,
                  onIconClick && 'cursor-pointer'
                )}
                onClick={() => onIconClick && onIconClick()}
              />
            </div>
          )}
          <input
            type={type}
            placeholder={placeholder}
            className={classNames(
              theme.base,
              squared ? theme.rounded[squared] : theme.rounded.all,
              size && size === 'large' ? theme.size.large : theme.size.base,
              !error ? theme.colors.gray : theme.colors.error,
              Icon && !iconRight && 'pl-10'
            )}
            {...cleanProps}
            ref={ref}
          />
        </div>
        {helper && <p className={classNames(theme.helper)}>{helper}</p>}
      </div>
    );
  }
);
