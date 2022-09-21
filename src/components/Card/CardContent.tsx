/**
 * 
 * It can be used to render a Card.
 *
 */

 import React, { ComponentProps, FC } from 'react';
 import { useTheme } from '../../theme/Context';
 
 export interface CardContentProps extends Omit<ComponentProps<'div'>, 'className'> {}
 
 export const CardContent: FC<CardContentProps> = ({ children }) => {
   const { content: theme } = useTheme().theme.card;
 
   return <div className={theme.base}>{children}</div>;
 };
 