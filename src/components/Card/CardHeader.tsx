/**
 * 
 * It can be used to render a Card.
 *
 */

 import React, { ComponentProps, FC } from 'react';
 import { useTheme } from '../../theme/Context';
 
 export interface CardHeaderProps extends Omit<ComponentProps<'div'>, 'className'> {}
 
 export const CardHeader: FC<CardHeaderProps> = ({ children }) => {
   const { header: theme } = useTheme().theme.card;
 
   return <div className={theme.base}>{children}</div>;
 };
 