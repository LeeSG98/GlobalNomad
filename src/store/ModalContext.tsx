import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isModalOpen: boolean;
  modalType: string;
  openModal: (type: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

// const ModalContext2 = createContext<{ contents: ReactNode } | undefiend>(
//   undefiend,
// );

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  // const [modalContents, setModalContents] = useState<ReactNode>(null);

  const openModal = (type: string) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalType("");
    setIsModalOpen(false);
  };

  // const openModal2 = (contents: ReactNode) => {
  //   setModalContents(contents);
  // };
  // const closeModal2 = () => {
  //   setModalContents(null);
  // };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, modalType, openModal, closeModal }}
    >
      {/* <ModalContext2.Provider value={{ contents: modalContents }}> */}
      {children}
      {/* </ModalContext2.Provider> */}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("");
  }
  return context;
};

// function ModalManager() {
//   const { contents } = useContext(ModalContext2)''

//   if (!contents) return null;
//   return <>{contents}</>
// }
//
