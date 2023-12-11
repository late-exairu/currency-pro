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
      className="bg-surface-light data-[selected=true]:ring-accent relative flex min-h-[73px] flex-col rounded-2xl px-6 py-3 text-left shadow-[0_2px_20px_0_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_2px_20px_0_rgba(0,0,0,0.18)] disabled:opacity-50 disabled:shadow-none data-[selected=true]:ring-2"
    >
      <span className="text-[22px] font-semibold">{code}</span>
      <span className="text-text text-sm">{name}</span>
      <span className="bg-surface text-text absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-xs">
        {symbol}
      </span>
    </button>
  );
}
