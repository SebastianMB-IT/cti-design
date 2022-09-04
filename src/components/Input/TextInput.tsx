/**
 * It renders input fields.
 *
 * @param {string} label The label to render.
 * @param {string} placeholder The placeholder to render.
 * @param {HTMLElement} icon The icon to show.
 * @param {boolean} iconRight The position of the icon.
 * @param {string} error The position of the icon.
 * @param {string} helper The text of the helper.
 * @param {string} size The size of the input.
 * @param {string} squared The radius of the border.
 * @param {function} onIconClick The callback on icon click.
 *
 */

import React, { ComponentProps, FC, forwardRef } from 'react'
import { clearClassName } from '../../helper/clear'
import { useTheme } from '../../theme/Context'
import classNames from 'classnames'

export interface TextInputProps
  extends Omit<ComponentProps<'input'>, 'ref' | 'color' | 'className' | 'size'> {
  label?: string
  icon?: FC<ComponentProps<'svg'>>
  iconRight?: boolean
  error?: boolean
  helper?: string
  size?: 'base' | 'large'
  squared?: 'left' | 'right' | 'top' | 'bottom'
  onIconClick?: () => void
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
    ref,
  ) => {
    const clearProps = clearClassName(props)
    const { input: theme } = useTheme().theme
    return (
      <div>
        {label && <label className={theme.label}>{label}</label>}
        <div className='relative'>
          {Icon && (
            <div
              className={classNames(
                theme.icon.base,
                iconRight ? theme.icon.right : theme.icon.left,
              )}
            >
              <Icon
                className={classNames(
                  size === 'large' ? theme.icon.size.large : theme.icon.size.base,
                  error ? theme.icon.red : theme.icon.gray,
                  onIconClick && 'cursor-pointer',
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
              Icon && !iconRight && 'pl-10',
            )}
            {...clearProps}
            ref={ref}
          />
        </div>
        {helper && <p className={classNames(theme.helper)}>{helper}</p>}
      </div>
    )
  },
)
