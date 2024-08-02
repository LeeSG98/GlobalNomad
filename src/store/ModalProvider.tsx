import React, { createContext, useContext, useState, ReactNode } from "react";

type ModalType = "none" | "cancel" | "review";

interface ModalContextType {
  activeModal: ModalType;
  openModal: (modal: "cancel" | "review", reservationId?: number) => void;
  closeModal: () => void;
  reservationId: number | null;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [activeModal, setActiveModal] = useState<ModalType>("none");
  const [reservationId, setReservationId] = useState<number | null>(null);

  const openModal = (modal: ModalType, reservationId?: number) => {
    setActiveModal(modal);

    if (reservationId !== undefined) {
      setReservationId(reservationId);
    }
  };
  const closeModal = () => {
    setActiveModal("none");
    setReservationId(null);
  };

  return (
    <ModalContext.Provider
      value={{ activeModal, openModal, closeModal, reservationId }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
