import React from "react";
import Currencies from "./Currencies";
import FilterInput from "./FilterInput";

export default async function CurrenciesPicker() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

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
