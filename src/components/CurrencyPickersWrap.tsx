import CurrencyPicker from "@/components/CurrencyPicker";
import fetchAllCurrencies from "@/lib/fetchAllCurrencies";

export default async function CurrencyPickersWrap() {
  const allCurrenciesData = await fetchAllCurrencies();

  return (
    <>
      <CurrencyPicker
        data={allCurrenciesData}
        title="Select your base currency"
        isBaseCurrency={true}
      />
      <CurrencyPicker
        data={allCurrenciesData}
        title="Select your target currency"
        isBaseCurrency={false}
      />
    </>
  );
}
