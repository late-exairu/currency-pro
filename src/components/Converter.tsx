"use client";

import { useState, useEffect } from "react";
import { usePersonStore } from "@/state/store";
import Icons from "./Icons";
import Link from "next/link";
interface ConverterProps {
  allCurrenciesData: any; // replace 'any' with the actual type
  pairConversionRateData: any; // replace 'any' with the actual type
  conversionPair: string[];
}

export default function Converter(props: ConverterProps) {
  const { allCurrenciesData, pairConversionRateData, conversionPair } = props;
  const [amount, setAmount] = useState("");
  const [conversionRate, setConversionRate] = useState(0);
  const [conversionResult, setConversionResult] = useState(0);

  usePersonStore.setState({ baseCurrency: conversionPair[0] });
  usePersonStore.setState({ targetCurrency: conversionPair[1] });

  const baseCurrency = usePersonStore((state) => state.baseCurrency);
  const targetCurrency = usePersonStore((state) => state.targetCurrency);
  const baseCurrencyData = allCurrenciesData.data[baseCurrency];
  const targetCurrencyData = allCurrenciesData.data[targetCurrency];

  useEffect(() => {
    setConversionRate(pairConversionRateData.data[targetCurrency]);
  }, [pairConversionRateData]);

  useEffect(() => {
    if (amount === "") {
      setConversionResult(1 * conversionRate);
      return;
    }
    const amountNumber = Number(amount.replace(baseCurrencyData.symbol, ""));
    const result = amountNumber * conversionRate;
    setConversionResult(result);
  }, [amount, conversionRate]);

  const handleAmountChange = (e: any) => {
    const input = e.target.value;
    if (
      input === baseCurrencyData.symbol ||
      input === "." ||
      input === "" ||
      input === " "
    ) {
      setAmount("");
      return;
    }

    if (input[input.length - 1] === ".") {
      if (input.match(/\./g)?.length > 1) {
        return;
      }
      setAmount(input);
      return;
    }

    const matchString = input.match(/[0-9]+(\.[0-9]{1,2})?/);
    const newAmount =
      matchString && matchString.length > 0 ? matchString[0] : "";

    setAmount(`${baseCurrencyData.symbol} ${newAmount}`);
  };

  const markedAmountHtml = (amount: string) => {
    if (!amount) {
      return "1.00";
    }
    if (Number(amount) > 999999999999999) {
      return "That is a lot of ";
    }
    const dotIndex = amount.indexOf(".");
    const amountWithTwoDecimals = amount.slice(0, dotIndex + 3);
    const amountAfterTwoDecimals = amount
      .slice(dotIndex + 3, amount.length)
      .substring(0, 6);
    const markup = {
      __html: `${amountWithTwoDecimals}<span class="text-text-light">${amountAfterTwoDecimals}</span>`,
    };

    return <span dangerouslySetInnerHTML={markup} />;
  };

  return (
    <>
      <div className="my-6 flex flex-col md:mb-5 md:mt-10 lg:mb-7 lg:mt-12">
        <label className="text-md text-text xs:text-lg md:text-2xl">
          Enter Amount
        </label>
        <input
          onChange={(e) => handleAmountChange(e)}
          className="my-2 h-12 rounded-full bg-surface p-2 text-center text-3xl font-bold text-accent-heavy outline-none focus:border-none focus:placeholder-accent dark:text-text-heavy dark:focus:placeholder-text-heavy xs:text-4xl sm:h-14 md:my-4 md:h-14 md:text-5xl lg:my-5 lg:h-16"
          type="text"
          value={`${amount}`}
          placeholder={`${baseCurrencyData.symbol} 1.00`}
        />
      </div>

      <div className="">
        <div className="mx-auto flex flex-shrink flex-col items-center gap-2 sm:flex-row md:gap-4">
          <div className="flex flex-1 justify-end">
            <div className="flex h-10 items-center whitespace-nowrap rounded-full bg-surface-light px-5 text-base shadow-md md:h-16 md:px-8 md:text-xl">
              {baseCurrencyData.code}-
              <span className="text-text">{baseCurrencyData.name}</span>
            </div>
          </div>

          <Link
            href={`/conversion/${targetCurrency}/${baseCurrency}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-light shadow-md transition-shadow hover:shadow-[0_2px_2px_rgb(0,0,0,0.1)] md:h-16 md:w-16"
          >
            <Icons
              icon="switch"
              className="h-5 w-5 fill-text-heavy md:h-6 md:w-6"
            />
          </Link>
          <div className="flex flex-1 justify-start">
            <div className="flex h-10 items-center whitespace-nowrap rounded-full bg-surface-light px-5 text-base shadow-md md:h-16 md:px-8 md:text-xl">
              {targetCurrencyData.code}-
              <span className="text-text">{targetCurrencyData.name}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-10 lg:mt-12">
          <p className="text-sm font-normal sm:text-base md:text-lg">
            {amount === "" ? "1.00" : amount} {baseCurrencyData.name}=
            <span className="my-2 block text-2xl font-bold md:text-3xl lg:text-[32px]">
              {markedAmountHtml(conversionResult.toString())}{" "}
              {targetCurrencyData.name_plural}
            </span>
          </p>
        </div>

        <p className="mt-5 text-sm md:mt-6 md:text-base lg:mt-8 lg:text-lg">
          <a
            href={`https://www.google.com/search?q=${baseCurrencyData.name}`}
            target="_blank"
            className="text-accent underline"
          >
            {baseCurrencyData.name}
          </a>
          &nbsp;to&nbsp;
          <a
            href={`https://www.google.com/search?q=${targetCurrencyData.name}`}
            target="_blank"
            className="text-accent underline"
          >
            {targetCurrencyData.name}
          </a>
          &nbsp;conversion
          {/* — Last updated 5 minutes ago */}
        </p>
      </div>

      {/* {JSON.stringify(allCurrenciesData)}
      {JSON.stringify(pairConversionRateData)} */}
    </>
  );
}
