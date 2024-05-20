import { create } from "zustand";

interface TransactionModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  type: "expense" | "income";
  setType: (type: "expense" | "income") => void;
}

export const useTransactionModal = create<TransactionModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  type: "expense",
  setType: (type) => set({ type }),
}));
