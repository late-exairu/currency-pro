"use client";

import { useStore } from "@/state/store";
import button from "@/components/Button";
import Link from "next/link";

export default function TrackBtn() {
  const baseCurrency = useStore((state) => state.baseCurrency);
  const targetCurrency = useStore((state) => state.targetCurrency);
  const isDisabled = baseCurrency && targetCurrency ? false : true;

  return (
    <div className="relative mt-5 flex md:mt-6">
      <div
        className="absolute -top-32 md:-top-36 lg:-top-40"
        id="result-controls"
      />
      <Link
        href={`/conversion/${baseCurrency}/${targetCurrency}`}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : undefined}
        onClick={(e) => {
          if (isDisabled) {
            e.preventDefault();
          }
        }}
        className={`${
          button({
            intent: "primary",
            size: "medium",
          }).props.className
        } mx-auto flex aria-disabled:cursor-not-allowed aria-disabled:opacity-30 aria-disabled:hover:bg-accent-heavy`}
      >
        Track exchange rate
      </Link>
    </div>
  );
}
