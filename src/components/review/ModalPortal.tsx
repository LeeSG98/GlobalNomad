import ReactDom from 'react-dom';
import { ModalPortalProps } from '@/types/reviewModal';

const ModalPortal = ({ children }: ModalPortalProps) => {
  const el = document.getElementById('modal-root') as HTMLElement;

  if (!el) {
    console.error('modal-root element not found');
    return null;
  }

  return ReactDom.createPortal(children, el);
};

export default ModalPortal;
