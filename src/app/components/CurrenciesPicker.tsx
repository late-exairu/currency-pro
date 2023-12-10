import React from "react";
import Currencies from "./Currencies";
import FilterInput from "./FilterInput";

const API_KEY = process.env.EXCHANGE_API_KEY;

export default async function CurrenciesPicker() {
  const requestUrl =
    `https://api.freecurrencyapi.com/v1/currencies ? apikey = ${API_KEY}`.replace(
      /\s/g,
      "",
    );

  console.log("aaaaaaaaaaaaaaaaaaaaaaaaa", requestUrl);

  const res = await fetch(`${requestUrl}`);
  const data = await res.json();

  // console.log(JSON.stringify(data));

  if (data?.message) {
    console.log(data.error);
    return (
      <div className="my-20 text-center">
        <p>{data.message}</p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="my-5 block flex-wrap items-center md:my-8 md:flex">
        <h3 className="text-xl md:text-2xl lg:text-3xl">
          Select your base currency
        </h3>

        <FilterInput className="my-5 flex-1 md:m-0 md:ml-5" />
      </div>

      <Currencies data={data} />
    </div>
  );
}
