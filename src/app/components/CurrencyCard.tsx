"use client";

import { usePersonStore } from "@/state/store";

interface CurrencyCardProps {
  code: string;
  name: string;
  symbol: string;
  isBaseCurrency: boolean;
  handleCurrencySelect: (code: string) => void;
}

export default function CurrencyCard(props: CurrencyCardProps) {
  const { code, name, symbol, isBaseCurrency, handleCurrencySelect } = props;
  const baseCurrency = usePersonStore((state) => state.baseCurrency);
  const targetCurrency = usePersonStore((state) => state.targetCurrency);
  const isBaseSelected = code === baseCurrency;
  const isTargetSelected = code === targetCurrency;

  return (
    <button
      data-currency={code}
      data-selected={isBaseCurrency ? isBaseSelected : isTargetSelected}
      disabled={!isBaseCurrency && code === baseCurrency}
      onClick={() => handleCurrencySelect(code)}
      className="relative flex min-h-[56px] flex-col rounded-2xl bg-surface-light px-4 py-2 text-left shadow-[0_2px_20px_0_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_2px_20px_0_rgba(0,0,0,0.18)] disabled:opacity-50 disabled:shadow-none data-[selected=true]:ring-2 data-[selected=true]:ring-accent sm:min-h-[72px] sm:px-6 sm:py-3"
    >
      <span className="text-lg font-semibold leading-snug sm:text-[22px]">
        {code}
      </span>
      <span className="text-xs text-text sm:text-sm">{name}</span>
      <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-surface text-[10px] text-text sm:right-3 sm:top-3 sm:h-8 sm:w-8 sm:text-xs">
        {symbol}
      </span>
    </button>
  );
}
