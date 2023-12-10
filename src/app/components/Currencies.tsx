"use client";

import { useEffect, useState } from "react";
import { usePersonStore } from "@/state/store";
import CurrencyCard from "./CurrencyCard";

const API_KEY = process.env.EXCHANGE_API_KEY;

export default function Currencies(props: { data: [] }) {
  const [filteredData, setFilteredData] = useState([]);
  const filterString = usePersonStore((state) => state.filterString);
  const { data } = props;

  useEffect(() => {
    setFilteredData(
      data.filter((item: { title: string }) =>
        item.title.toLowerCase().includes(filterString.toLowerCase()),
      ),
    );
  }, [filterString]);

  return (
    <ul className="grid grid-cols-2 gap-x-[18px] gap-y-[35px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {filteredData.map((item: { id: number; title: string; body: string }) => (
        <CurrencyCard key={item.id} {...item} />
      ))}
    </ul>
  );
}
