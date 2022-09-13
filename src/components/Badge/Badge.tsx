/**
 *
 * The badge can be used to highlight values or statuses.
 *
 * @param label - The label to show.
 *
 */

import classNames from 'classnames';
import React, { FC, ComponentProps } from 'react';
import { useTheme } from '../../theme/Context';

export interface BadgeProps extends ComponentProps<'div'> {
  variant:
    | 'available'
    | 'dnd'
    | 'voicemail'
    | 'cellphone'
    | 'callforward'
    | 'busy'
    | 'incoming'
    | 'offline';
  rounded?: 'base' | 'full';
  size?: 'base' | 'large';
  dot?: boolean;
  hide?: boolean;
}

export const Badge: FC<BadgeProps> = ({
  rounded,
  variant,
  children,
  size,
  dot,
  hide,
}): JSX.Element => {
  const { badge: theme, status } = useTheme().theme;

  return (
    <>
      {!hide && (
        <span
          className={classNames(
            theme.base,
            rounded ? theme.rounded[rounded] : theme.rounded.base,
            variant && status[variant].badge.base,
            size ? theme.sizes[size] : theme.sizes.base
          )}
        >
          {dot && (
            <div className={classNames(theme.dot, status[variant].badge.dot)}></div>
          )}
          {children}
        </span>
      )}
    </>
  );
};
