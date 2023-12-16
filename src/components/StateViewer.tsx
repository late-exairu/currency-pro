"use client";

import { useStore } from "@/state/store";

export default function StateViewer() {
  const filterBaseString = useStore((state) => state.filterBaseString);
  const filterTargetString = useStore((state) => state.filterTargetString);
  const baseCurrency = useStore((state) => state.baseCurrency);
  const targetCurrency = useStore((state) => state.targetCurrency);

  return (
    <div className="fixed bottom-0 left-0 bg-surface-light p-5 shadow-md shadow-slate-600">
      <p className="text-sm text-text-heavy">
        Filter for base: {filterBaseString}
      </p>
      <p className="text-sm text-text-heavy">
        Filter for target: {filterTargetString}
      </p>
      <p className="text-sm text-text-heavy">Base currency: {baseCurrency}</p>
      <p className="text-sm text-text-heavy">
        Target currency: {targetCurrency}
      </p>
    </div>
  );
}
