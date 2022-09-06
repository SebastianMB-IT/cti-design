/**
 *
 * The Modal component shows elements in foreground
 * 
 * @param root - The root element of the modal.
 * @param show - The parameter to show the modal.
 * @param size - The size of the modal.
 *
 */

import type { FC, ComponentProps, PropsWithChildren } from 'react';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useTheme } from '../../theme/Context';
import { cleanClassName } from '../../helper/clean';
import { createPortal } from 'react-dom';
import { ModalContent } from './ModalContent';
import { ModalActions } from './ModalActions';
import windowExists from '../../helper/window';

export interface ModalProps
  extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
  root?: HTMLElement;
  show?: boolean;
  size?: 'base' | 'large';
}

const ModalComponent: FC<ModalProps> = ({
  children,
  root = windowExists() ? document.body : undefined,
  show,
  size = 'base',
  ...props
}) => {
  const [container] = useState<HTMLDivElement | undefined>(
    windowExists() ? document.createElement('div') : undefined
  );
  const theme = useTheme().theme.modal;
  const cleanProps = cleanClassName(props);

  useEffect(() => {
    if (!container || !root || !show) {
      return;
    }

    root.appendChild(container);

    return () => {
      root.removeChild(container);
    };
  }, [container, root, show]);

  return container
    ? createPortal(
        <>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div
            aria-hidden={!show}
            aria-labelledby="modal-title"
            className={classNames(theme.base)}
            data-testid="modal"
            role="dialog"
            {...cleanProps}
          >
            <div className={theme.col}>
              <div className={theme.main}>{children}</div>
            </div>
          </div>
        </>,
        container
      )
    : null;
};

ModalComponent.displayName = 'Modal';
ModalContent.displayName = 'Modal.Title';
ModalActions.displayName = 'Modal.Actions';

export const Modal = Object.assign(ModalComponent, {
  Content: ModalContent,
  Actions: ModalActions,
});
