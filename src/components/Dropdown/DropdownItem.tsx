import React, { FC, ComponentProps } from 'react';
import { Menu } from '@headlessui/react';
import classNames from 'classnames';
import { useTheme } from '../../theme/Context';
import { cleanClassName } from '../../helper/clean';

export interface DropdownItemProps
  extends Omit<ComponentProps<'div'>, 'className'> {
  onClick?: () => void;
  icon?: FC<ComponentProps<'svg'>>;
  centered?: boolean;
}

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  onClick,
  icon: Icon,
  centered,
  ...props
}) => {
  const { dropdown: theme } = useTheme().theme;
  const theirProps = cleanClassName(props);

  return (
    <Menu.Item>
      {({ active }) => (
        <div
          className={classNames(
            theme.item.base,
            active ? theme.item.active : theme.item.light,
            centered && theme.item.centered
          )}
          onClick={onClick}
          {...theirProps}
        >
          {Icon && <Icon className={theme.item.icon} />}
          {children}
        </div>
      )}
    </Menu.Item>
  );
};
