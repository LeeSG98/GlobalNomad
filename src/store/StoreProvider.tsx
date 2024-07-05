import React, { createContext, useState, ReactNode } from 'react';

interface StoreContextProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

export const StoreContext = createContext<StoreContextProps | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <StoreContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </StoreContext.Provider>
  );
};