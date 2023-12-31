import CurrenciesList from "@/components/CurrenciesList";
import FilterInput from "@/components/FilterInput";

export default function CurrencyPicker(props: {
  data: any;
  title: string;
  isBaseCurrency: boolean;
}) {
  const { title, isBaseCurrency, data } = props;

  if (data?.message) {
    return (
      <div className="my-20 text-center">
        <p>{data.message}</p>
      </div>
    );
  }

  return (
    <div className="relative [&:not(:first-child)]:mt-10 md:[&:not(:first-child)]:mt-20">
      <div
        className="absolute -top-20 md:-top-24 lg:-top-32"
        id={isBaseCurrency ? "base-currency-picker" : "target-currency-picker"}
      />
      <div className="mb-5 block flex-wrap items-center justify-between md:mb-8 md:flex">
        <h3 className="text-center text-xl sm:text-2xl md:text-left lg:text-3xl">
          {title}
        </h3>

        <FilterInput
          isBaseCurrency={isBaseCurrency}
          className="my-5 flex-1 md:m-0 md:ml-5 md:max-w-sm"
        />
      </div>
      <CurrenciesList isBaseCurrency={isBaseCurrency} data={data} />
    </div>
  );
}
