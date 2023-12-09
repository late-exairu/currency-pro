import { create } from "zustand";
// import useMediaQuery from "../hooks/useMediaQuery";

type State = {
  isMenuOpen: boolean;
  isDarkMode: boolean;
  // isScreenLg: boolean;
};

type Action = {
  toggleMenuOpen: (isMenuOpen: State["isMenuOpen"]) => void;
  toggleDarkMode: (isDarkMode: State["isDarkMode"]) => void;
};

export const usePersonStore = create<State & Action>((set) => ({
  isMenuOpen: false,
  isDarkMode: false,
  // isScreenLg: useMediaQuery("(min-width: 1024px)"),
  toggleMenuOpen: (isMenuOpen) => set(() => ({ isMenuOpen: !isMenuOpen })),
  toggleDarkMode: (isDarkMode) => set(() => ({ isDarkMode: !isDarkMode })),
}));
