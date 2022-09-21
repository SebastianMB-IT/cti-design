/**
 * 
 * It can be used to render a Avatar or User's profile image.
 *
 * @param rounded - Indicate the radius of the avatar.
 * @param status - Indicate the status of the status circle.
 *
 */

import React, { ComponentProps, FC, ReactNode } from 'react';
import { useTheme } from '../../theme/Context';
import classNames from 'classnames';
import { AvatarGroup, AvatarGroupProps as GroupProps } from './AvatarGroup';
import type { StatusTypes } from '../../theme/Types'

export type AvatarGroupProps = GroupProps

export interface AvatarProps
  extends Omit<ComponentProps<'div'>, 'className' | 'placeholder'> {
  rounded?: 'base' | 'full';
  status?: StatusTypes;
  src?: string;
  initials?: string;
  placeholder?: ReactNode;
  bordered?: boolean;
}

const AvatarComponent: FC<AvatarProps> = ({
  rounded,
  status,
  src,
  initials,
  placeholder,
  bordered
}) => {
  const { avatar: theme, status: statuses } = useTheme().theme;

  return (
    <div
      className={classNames(
        theme.base,
        initials && theme.initials.background,
        placeholder && theme.placeholder.background,
        rounded ? theme.rounded[rounded] : theme.rounded.full,
        bordered && theme.bordered
      )}
    >
      {src && (
        <img
          className={classNames(
            theme.image,
            rounded ? theme.rounded[rounded] : theme.rounded.full
          )}
          src={src}
        />
      )}
      {initials && <div className={theme.initials.base}>{initials}</div>}
      {placeholder && <div>{placeholder}</div>}
      {status && (
        <div
          className={classNames(
            theme.status.base,
            statuses[status].avatar.dot,
            rounded === 'base' ? theme.status.rounded : theme.status.circular
          )}
        ></div>
      )}
    </div>
  );
};

AvatarGroup.displayName = 'Avatar.Group';

export const Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroup,
});
