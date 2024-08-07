import React, { createContext, useState, ReactNode } from "react";

interface StoreContextProps {

}

export const StoreContext = createContext<StoreContextProps | undefined>(
  undefined,
);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {

  return (
    <StoreContext.Provider value={{}}>
      {children}
    </StoreContext.Provider>
  );
};
