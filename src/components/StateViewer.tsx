"use client";

import { usePersonStore } from "@/state/store";

export default function StateViewer() {
  const filterBaseString = usePersonStore((state) => state.filterBaseString);
  const filterTargetString = usePersonStore(
    (state) => state.filterTargetString,
  );
  const baseCurrency = usePersonStore((state) => state.baseCurrency);
  const targetCurrency = usePersonStore((state) => state.targetCurrency);

  return (
    <div className="fixed bottom-0 left-0 bg-surface-light p-5 shadow-md shadow-slate-600">
      <p className="text-sm text-text-heavy">
        Showing results for: {filterBaseString}
      </p>
      <p className="text-sm text-text-heavy">
        Showing results for: {filterTargetString}
      </p>
      <p className="text-sm text-text-heavy">Base currency: {baseCurrency}</p>
      <p className="text-sm text-text-heavy">
        Target currency: {targetCurrency}
      </p>
    </div>
  );
}
