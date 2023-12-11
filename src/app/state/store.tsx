import { create } from "zustand";
// import useMediaQuery from "../hooks/useMediaQuery";

type State = {
  isMenuOpen: boolean;
  isDarkMode: boolean;
  allCurrencies: any[];
  filterBaseString: string;
  filterTargetString: string;
  baseCurrency: string;
  targetCurrency: string;
  // isScreenLg: boolean;
};

type Action = {
  toggleMenuOpen: (isMenuOpen: State["isMenuOpen"]) => void;
  toggleDarkMode: (isDarkMode: State["isDarkMode"]) => void;
  updateAllCurrencies: (allCurrencies: State["allCurrencies"]) => void;
  setFilterBaseString: (filterBaseString: State["filterBaseString"]) => void;
  setFilterTargetString: (
    filterTargetString: State["filterTargetString"],
  ) => void;
  setBaseCurrency: (baseCurrency: State["baseCurrency"]) => void;
  setTargetCurrency: (targetCurrency: State["targetCurrency"]) => void;
};

export const usePersonStore = create<State & Action>((set) => ({
  isMenuOpen: false,
  isDarkMode: false,
  allCurrencies: [],
  filterBaseString: "",
  filterTargetString: "",
  baseCurrency: "",
  targetCurrency: "",

  // Actions
  toggleMenuOpen: (isMenuOpen) => set(() => ({ isMenuOpen: !isMenuOpen })),
  toggleDarkMode: (isDarkMode) => set(() => ({ isDarkMode: !isDarkMode })),
  updateAllCurrencies: (allCurrencies) =>
    set(() => ({
      allCurrencies: [...allCurrencies],
    })),
  setFilterBaseString: (filterBaseString) => set(() => ({ filterBaseString })),
  setFilterTargetString: (filterTargetString) =>
    set(() => ({ filterTargetString })),
  setBaseCurrency: (baseCurrency) => set(() => ({ baseCurrency })),
  setTargetCurrency: (targetCurrency) => set(() => ({ targetCurrency })),
  // isScreenLg: useMediaQuery("(min-width: 1024px)"),
}));
