import { createContext, useState } from "react";

export const SellContext = createContext({
  isModalOpen: null,
  setIsModalOpen: () => null,
  isBasketOpen: null,
  setIsBasketOpen: () => null,
});

export const SellProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [isBasketOpen, setIsBasketOpen] = useState(null);

  const value = {
    isModalOpen,
    setIsModalOpen,
    isBasketOpen,
    setIsBasketOpen
  };

  return <SellContext.Provider value={value}>{children}</SellContext.Provider>;
};
