import { ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultToastOption: ToastOptions = {
  position: 'bottom-center',
  autoClose: 3000,
  closeOnClick: true,
  pauseOnHover: false,
};

const Toast = {
  success: (message: any, options: ToastOptions = {}) => {
    toast.success(message, { ...defaultToastOption, ...options });
  },
  error: (message: any, options: ToastOptions = {}) => {
    toast.error(message === 'Internal Server Error' ? '서버 에러가 발생했습니다.' : message, {
      ...defaultToastOption,
      ...options,
    });
  },
};

export default Toast;