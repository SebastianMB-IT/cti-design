/**
 * 
 * It can be used to render a Card.
 *
 */

import React, { ComponentProps, FC } from 'react';
import { useTheme } from '../../theme/Context';
import classNames from 'classnames';
import { CardActions } from './CardActions';
import { CardContent } from './CardContent';
import { CardHeader } from './CardHeader';
import type { StatusTypes } from '../../theme/Types'

export interface CardProps extends Omit<ComponentProps<'div'>, 'className'> {
  content?: string;
  backgroundColor?: string;
  status?: StatusTypes;
}

const CardComponent: FC<CardProps> = ({ children, status }) => {

  const { card: theme, status: statuses} = useTheme().theme

  return (
    <div className={classNames(
      theme.base
    )}>
      <div className={classNames(
        theme.wrapper.rounded,
        status && theme.wrapper.border,
        status && statuses[status].card.border,
      )}>
        {children}
      </div>
    </div>
  );
};

CardHeader.displayName = 'Card.Header'
CardContent.displayName = 'Card.Content'
CardActions.displayName = 'Card.Actions'

export const Card = Object.assign(CardComponent, {
  Header: CardHeader,
  Content: CardContent,
  Actions: CardActions,
})