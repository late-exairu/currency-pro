import { create } from "zustand";
// import useMediaQuery from "../hooks/useMediaQuery";

type State = {
  isMenuOpen: boolean;
  // isScreenLg: boolean;
};

type Action = {
  toggleMenuOpen: (isMenuOpen: State["isMenuOpen"]) => void;
};

export const usePersonStore = create<State & Action>((set) => ({
  isMenuOpen: false,
  // isScreenLg: useMediaQuery("(min-width: 1024px)"),
  toggleMenuOpen: (isMenuOpen) => set(() => ({ isMenuOpen: !isMenuOpen })),
}));
