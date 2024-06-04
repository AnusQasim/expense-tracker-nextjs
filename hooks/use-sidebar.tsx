import { create } from "zustand";

interface SidebarStore {
  isOpen: boolean;
  toggle: (setOpen?: boolean) => void;
}

export const useSidebar = create<SidebarStore>((set) => ({
  isOpen: false,
  toggle: (setOpen) =>
    set((state) => ({
      isOpen: setOpen === undefined ? !state.isOpen : setOpen,
    })),
}));
