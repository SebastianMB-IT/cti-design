import type { FC, PropsWithChildren, ComponentProps } from 'react'
import React from 'react'
import { useTheme } from '../../theme/Context';


export type ModalActionsProps = PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>;

export const ModalActions: FC<ModalActionsProps> = ({children}) => {

  const {modal: modalTheme} = useTheme().theme

  return (
    <div className={modalTheme.actions.base}>
      {children}
    </div>
  )
}
