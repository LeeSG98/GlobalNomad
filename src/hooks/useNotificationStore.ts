import create from 'zustand';

interface NotificationState {
  message: string;
  type: 'success' | 'error';
  isOpen: boolean;
  showNotification: (message: string, type: 'success' | 'error') => void;
  hideNotification: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  message: '',
  type: 'success',
  isOpen: false,
  showNotification: (message, type) => set({ message, type, isOpen: true }),
  hideNotification: () => set({ isOpen: false }),
}));
