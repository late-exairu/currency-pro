"use client";

import { usePersonStore } from "@/state/store";
import Button from "./Button";

export default function TrackBtn() {
  const baseCurrency = usePersonStore((state) => state.baseCurrency);
  const targetCurrency = usePersonStore((state) => state.targetCurrency);
  console.log(baseCurrency, targetCurrency);

  return (
    <Button
      disabled={baseCurrency && targetCurrency ? false : true}
      className="mx-auto mt-5 flex items-center disabled:cursor-not-allowed disabled:opacity-30 md:mt-6"
    >
      Track exchange rate
    </Button>
  );
}
