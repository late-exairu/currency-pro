import { create } from "zustand";
// import useMediaQuery from "../hooks/useMediaQuery";

type State = {
  isMenuOpen: boolean;
  isDarkMode: boolean;
  allCurrencies: any[];
  filterString: string;
  baseCurrency: string;
  targetCurrency: string;
  // isScreenLg: boolean;
};

type Action = {
  toggleMenuOpen: (isMenuOpen: State["isMenuOpen"]) => void;
  toggleDarkMode: (isDarkMode: State["isDarkMode"]) => void;
  updateAllCurrencies: (allCurrencies: State["allCurrencies"]) => void;
  setFilterString: (filterString: State["filterString"]) => void;
  setBaseCurrency: (baseCurrency: State["baseCurrency"]) => void;
  setTargetCurrency: (targetCurrency: State["targetCurrency"]) => void;
};

export const usePersonStore = create<State & Action>((set) => ({
  isMenuOpen: false,
  isDarkMode: false,
  allCurrencies: [],
  filterString: "",
  baseCurrency: "",
  targetCurrency: "",

  // Actions
  toggleMenuOpen: (isMenuOpen) => set(() => ({ isMenuOpen: !isMenuOpen })),
  toggleDarkMode: (isDarkMode) => set(() => ({ isDarkMode: !isDarkMode })),
  updateAllCurrencies: (allCurrencies) =>
    set(() => ({
      allCurrencies: [...allCurrencies],
    })),
  setFilterString: (filterString) => set(() => ({ filterString })),
  setBaseCurrency: (baseCurrency) => set(() => ({ baseCurrency })),
  setTargetCurrency: (targetCurrency) => set(() => ({ targetCurrency })),
  // isScreenLg: useMediaQuery("(min-width: 1024px)"),
}));
