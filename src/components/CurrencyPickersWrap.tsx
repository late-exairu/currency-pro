import CurrencyPicker from "@/components/CurrencyPicker";
import fetchAllCurrencies from "@/lib/fetchAllCurrencies";
import TargetPickerWrap from "./TargetPickerWrap";

export default async function CurrencyPickersWrap() {
  const allCurrenciesData = await fetchAllCurrencies();

  return (
    <>
      <CurrencyPicker
        data={allCurrenciesData}
        title="Select your base currency"
        isBaseCurrency={true}
      />
      <TargetPickerWrap>
        <CurrencyPicker
          data={allCurrenciesData}
          title="Select your target currency"
          isBaseCurrency={false}
        />
      </TargetPickerWrap>
    </>
  );
}
