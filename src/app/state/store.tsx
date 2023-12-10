import { create } from "zustand";
// import useMediaQuery from "../hooks/useMediaQuery";

type State = {
  isMenuOpen: boolean;
  isDarkMode: boolean;
  allCurrencies: any[];
  filterString: string;
  // isScreenLg: boolean;
};

type Action = {
  toggleMenuOpen: (isMenuOpen: State["isMenuOpen"]) => void;
  toggleDarkMode: (isDarkMode: State["isDarkMode"]) => void;
  updateAllCurrencies: (allCurrencies: State["allCurrencies"]) => void;
  setFilterString: (filterString: State["filterString"]) => void;
};

export const usePersonStore = create<State & Action>((set) => ({
  isMenuOpen: false,
  isDarkMode: false,
  allCurrencies: [],
  filterString: "",

  // Actions
  toggleMenuOpen: (isMenuOpen) => set(() => ({ isMenuOpen: !isMenuOpen })),
  toggleDarkMode: (isDarkMode) => set(() => ({ isDarkMode: !isDarkMode })),
  updateAllCurrencies: (allCurrencies) =>
    set(() => ({
      allCurrencies: [...allCurrencies],
    })),
  setFilterString: (filterString) => set(() => ({ filterString })),
  // isScreenLg: useMediaQuery("(min-width: 1024px)"),
}));
