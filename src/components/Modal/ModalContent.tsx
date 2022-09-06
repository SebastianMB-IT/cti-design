/**
 *
 * The actions wrapper of the modal
 * 
 * @param children - The content of the modal content.
 *
 */

import type { FC, PropsWithChildren, ComponentProps } from 'react'
import React from 'react'
import { useTheme } from '../../theme/Context';
import { cleanClassName } from '../../helper/clean'

export type ModalContentProps = PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>;

export const ModalContent: FC<ModalContentProps> = ({children, ...props}) => {

  const {modal: modalTheme} = useTheme().theme
  const cleanProps = cleanClassName(props)

  return (
    <div className={modalTheme.content.base} {...cleanProps}>
      {children}
    </div>
  )
}
