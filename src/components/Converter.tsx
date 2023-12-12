"use client";

import { useState } from "react";

interface ConverterProps {
  allCurrenciesData: any; // replace 'any' with the actual type
  pairConversionRateData: any; // replace 'any' with the actual type
}

export default async function Converter({
  allCurrenciesData,
  pairConversionRateData,
}: ConverterProps) {
  const [amount, setAmount] = useState("1.00");
  const [conversionRate, setConversionRate] = useState(0);
  const [conversionResult, setConversionResult] = useState(0);
  const [baseCurrency, setBaseCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");

  // console.log("currencyPair", currencyPair);
  // setBaseCurrency(currencyPair[0]);
  // setTargetCurrency(currencyPair[1]);

  return (
    <>
      <div className="my-8 flex flex-col md:my-10 lg:my-12">
        <label className="text-md text-text xs:text-lg md:text-2xl">
          Enter Amount
        </label>
        <input
          // onChange={(e) => setAmount(e.target.value)}
          className="my-3 mb-4 mt-2 h-12 rounded-md bg-surface p-2 text-center text-2xl font-bold text-accent-heavy active:border-none active:outline-none xs:text-3xl md:my-4 md:h-14 md:text-5xl lg:my-5 lg:h-16"
          type="number"
          placeholder="1.00"
        />
      </div>

      {JSON.stringify(allCurrenciesData)}
      {JSON.stringify(pairConversionRateData)}
    </>
  );
}
