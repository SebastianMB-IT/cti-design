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
import type { StatusTypes } from '../../theme/Types'

export interface BadgeProps extends ComponentProps<'div'> {
  variant: StatusTypes;
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
  const { badge: theme, status: statuses } = useTheme().theme;

  return (
    <>
      {!hide && (
        <span
          className={classNames(
            theme.base,
            rounded ? theme.rounded[rounded] : theme.rounded.base,
            variant && statuses[variant].badge.base,
            size ? theme.sizes[size] : theme.sizes.base
          )}
        >
          {dot && (
            <div className={classNames(theme.dot, statuses[variant].badge.dot)}></div>
          )}
          {children}
        </span>
      )}
    </>
  );
};
