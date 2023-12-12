import { Suspense } from "react";
import getAllCurrencies from "@/lib/getCurrencies";
import getPairConversionRate from "@/lib/getPairConversionRate";
import Converter from "./Converter";

export default async function Conversion(params: { slug: string }) {
  const allCurrenciesData = await getAllCurrencies();
  const pairConversionRateData = await getPairConversionRate(
    params.slug[0],
    params.slug[1],
  );

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-text-heavy xs:text-3xl md:text-[42px]">
        Currency<span className="text-accent-heavy">pro</span> Converter
      </h2>
      <p className="text-md text-text xs:text-lg md:text-2xl">
        Check live foreign currency exchange rates
      </p>

      <div className="flex flex-col">
        <label className="text-md text-text xs:text-lg md:text-2xl">
          Enter Amount
        </label>
        <input
          className="mb-4 mt-2 rounded-md bg-surface p-2 text-center text-lg font-bold text-accent-heavy active:border-none active:outline-none xs:text-2xl md:text-5xl"
          type="number"
          placeholder="1.0"
        />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Converter
          allCurrenciesData={allCurrenciesData}
          pairConversionRateData={pairConversionRateData}
        />
      </Suspense>
    </div>
  );
}
