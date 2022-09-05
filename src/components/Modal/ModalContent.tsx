import type { FC, PropsWithChildren, ComponentProps } from 'react'
import React from 'react'
import { useTheme } from '../../theme/Context';

export type ModalContentProps = PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>;

export const ModalContent: FC<ModalContentProps> = ({children}) => {

  const {modal: modalTheme} = useTheme().theme

  return (
    <div className={modalTheme.content.base}>
      {children}
    </div>
  )
}
