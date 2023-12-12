import React, { Suspense } from "react";
import Currencies from "@/components/Currencies";
import FilterInput from "@/components/FilterInput";

export default function CurrencyPicker(props: {
  data: any;
  title: string;
  isBaseCurrency: boolean;
}) {
  const { title, isBaseCurrency, data } = props;

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
      <div className="my-5 block flex-wrap items-center justify-between md:my-8 md:flex">
        <h3 className="text-xl sm:text-2xl lg:text-3xl">{title}</h3>

        <FilterInput
          isBaseCurrency={isBaseCurrency}
          className="my-5 flex-1 md:m-0 md:ml-5 md:max-w-sm"
        />
      </div>

      <Currencies isBaseCurrency={isBaseCurrency} data={data} />
    </div>
  );
}
