"use client";

import { useEffect, useState } from "react";
import { usePersonStore } from "@/state/store";
import CurrencyCard from "./CurrencyCard";

type Currency = {
  code: string;
  name: string;
  symbol: string;
};

type Props = {
  data: {
    data: {
      [key: string]: any;
    };
  };
  isBaseCurrency: boolean;
};

export default function Currencies(props: Props) {
  const { data, isBaseCurrency } = props;
  const [filteredBaseData, setFilteredBaseData] = useState<Currency[]>([]);
  const [filteredTargetData, setFilteredTargetData] = useState<Currency[]>([]);
  const filterBaseString = usePersonStore((state) => state.filterBaseString);
  const filterTargetString = usePersonStore(
    (state) => state.filterTargetString,
  );

  // convert data object to array
  const currenciesArray = Object.keys(data.data).map((currencyCode) => ({
    code: currencyCode,
    ...data.data[currencyCode],
  }));

  useEffect(() => {
    setFilteredBaseData(
      currenciesArray.filter(
        (currency: Currency) =>
          currency.code
            .toLowerCase()
            .includes(filterBaseString.toLowerCase()) ||
          currency.name.toLowerCase().includes(filterBaseString.toLowerCase()),
      ),
    );
  }, [filterBaseString]);

  useEffect(() => {
    setFilteredTargetData(
      currenciesArray.filter(
        (currency: Currency) =>
          currency.code
            .toLowerCase()
            .includes(filterTargetString.toLowerCase()) ||
          currency.name
            .toLowerCase()
            .includes(filterTargetString.toLowerCase()),
      ),
    );
  }, [filterTargetString]);

  return (
    <ul className="grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-3 md:gap-x-[18px] md:gap-y-[35px] lg:grid-cols-4 xl:grid-cols-5">
      {isBaseCurrency
        ? filteredBaseData.map((item: Currency) => (
            <CurrencyCard
              key={item.code}
              name={item.name}
              code={item.code}
              symbol={item.symbol}
            />
          ))
        : filteredTargetData.map((item: Currency) => (
            <CurrencyCard
              key={item.code}
              name={item.name}
              code={item.code}
              symbol={item.symbol}
            />
          ))}
    </ul>
  );
}
