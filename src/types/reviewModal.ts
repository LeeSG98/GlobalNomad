import { ReactNode } from 'react';

export interface ModalBackgroundProps {
    onClose: () => void;
    children: React.ReactNode;
  }

  export interface ModalPortalProps {
    children: ReactNode;
  }