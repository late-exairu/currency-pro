"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/state/store";
import CurrencyCard from "@/components/CurrencyCard";

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface CurrenciesProps {
  data: {
    [key: string]: any;
  };
  isBaseCurrency: boolean;
}

export default function Currencies(props: CurrenciesProps) {
  const { data, isBaseCurrency } = props;
  const [filteredBaseData, setFilteredBaseData] = useState<Currency[]>([]);
  const [filteredTargetData, setFilteredTargetData] = useState<Currency[]>([]);
  const baseCurrency = useStore((state) => state.baseCurrency);
  const targetCurrency = useStore((state) => state.targetCurrency);
  const filterBaseString = useStore((state) => state.filterBaseString);
  const filterTargetString = useStore((state) => state.filterTargetString);

  // convert data object to array
  const currenciesArray = Object.keys(data)
    .map((currencyCode) => {
      return {
        code: currencyCode,
        ...data[currencyCode],
      };
    })
    .filter(Boolean);

  const handleCurrencySelect = (code: string) => {
    if (isBaseCurrency) {
      if (code === baseCurrency) {
        useStore.setState({ baseCurrency: "" });
        return;
      }
      useStore.setState({ baseCurrency: code });

      setTimeout(() => {
        document
          .getElementById("target-currency-picker")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      if (code === targetCurrency) {
        useStore.setState({ targetCurrency: "" });
        return;
      }
      useStore.setState({ targetCurrency: code });
    }
  };

  const filterCurrencies = (
    filterString: string,
    comparisonCurrency: string,
  ) => {
    return currenciesArray.filter(
      (currency: Currency) =>
        currency.code.toLowerCase().includes(filterString.toLowerCase()) ||
        currency.name.toLowerCase().includes(filterString.toLowerCase()) ||
        currency.code === comparisonCurrency,
    );
  };

  useEffect(() => {
    setFilteredBaseData(filterCurrencies(filterBaseString, baseCurrency));
  }, [filterBaseString]);

  useEffect(() => {
    setFilteredTargetData(filterCurrencies(filterTargetString, targetCurrency));
  }, [filterTargetString]);

  const currencyCard = (item: Currency, isBase: boolean) => (
    <CurrencyCard
      key={item.code}
      name={item.name}
      code={item.code}
      symbol={item.symbol}
      isBaseCurrency={isBase}
      handleCurrencySelect={handleCurrencySelect}
    />
  );

  const notFoundHtml = (
    <div className="flex h-28 items-center justify-center">
      <p className="text-xl font-medium text-text">No results found</p>
    </div>
  );

  if (isBaseCurrency && !filteredBaseData.length) {
    return notFoundHtml;
  }

  if (!isBaseCurrency && !filteredTargetData.length) {
    return notFoundHtml;
  }

  return (
    <ul className="my-5 grid grid-cols-2 gap-x-2 gap-y-3 sm:gap-x-3 sm:gap-y-4 md:my-8 md:grid-cols-3 md:gap-x-[18px] md:gap-y-[35px] lg:grid-cols-4 xl:grid-cols-5">
      {isBaseCurrency
        ? filteredBaseData.map((item: Currency) => currencyCard(item, true))
        : filteredTargetData.map((item: Currency) => currencyCard(item, false))}
    </ul>
  );
}
