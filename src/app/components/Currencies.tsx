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
};

export default function Currencies(props: Props) {
  const { data } = props;
  const [filteredData, setFilteredData] = useState<Currency[]>([]);
  const filterString = usePersonStore((state) => state.filterString);

  // convert data object to array
  const currenciesArray = Object.keys(data.data).map((currencyCode) => ({
    code: currencyCode,
    ...data.data[currencyCode],
  }));

  useEffect(() => {
    console.log("currenciesArray", currenciesArray);

    setFilteredData(
      currenciesArray.filter(
        (currency: Currency) =>
          currency.code.toLowerCase().includes(filterString.toLowerCase()) ||
          currency.name.toLowerCase().includes(filterString.toLowerCase()),
      ),
    );
  }, [filterString]);

  return (
    <ul className="grid grid-cols-2 gap-x-[18px] gap-y-[35px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {filteredData.map((item: Currency) => (
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
