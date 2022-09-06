/**
 *
 * The actions wrapper of the modal
 * 
 * @param children - The content of the modal actions.
 *
 */

import type { FC, PropsWithChildren, ComponentProps } from 'react'
import React from 'react'
import { useTheme } from '../../theme/Context';
import { cleanClassName } from '../../helper/clean'

export type ModalActionsProps = PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>;

export const ModalActions: FC<ModalActionsProps> = ({children, ...props}) => {

  const {modal: modalTheme} = useTheme().theme
  const cleanProps = cleanClassName(props)

  return (
    <div className={modalTheme.actions.base} {...cleanProps}>
      {children}
    </div>
  )
}
