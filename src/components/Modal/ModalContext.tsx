import { createContext, useContext } from 'react';

interface ModalContext {
  popup?: boolean;
  onClose?: () => void;
}

export const ModalContext = createContext<ModalContext | undefined>(undefined);

export const useModalContext = (): ModalContext => {
  const context = useContext(ModalContext);

  if (!context) throw new Error('useModalContext should be used within the ModalContext provider!')

  return context;
};
