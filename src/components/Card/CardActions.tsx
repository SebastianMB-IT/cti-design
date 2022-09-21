/**
 * It can be used to render a Card.
 *
 */

import React, { ComponentProps, FC } from 'react';
import { useTheme } from '../../theme/Context';

export interface CardActionsProps extends Omit<ComponentProps<'div'>, 'className'> {}

export const CardActions: FC<CardActionsProps> = ({ children }) => {
  const { actions: theme } = useTheme().theme.card;

  return <div className={theme.base}>{children}</div>;
};
