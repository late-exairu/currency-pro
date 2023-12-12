import CurrencyPicker from "@/components/CurrencyPicker";
import getAllCurrencies from "@/lib/getCurrencies";

export default async function CurrencyPickersWrap() {
  const allCurrenciesData = await getAllCurrencies();

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
