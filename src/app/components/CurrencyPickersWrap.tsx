import CurrencyPicker from "@/components/CurrencyPicker";

const API_KEY = process.env.EXCHANGE_API_KEY;

export default async function CurrencyPickersWrap() {
  const requestUrl =
    `https://api.freecurrencyapi.com/v1/currencies ? apikey = ${API_KEY}`.replace(
      /\s/g,
      "",
    );

  const res = await fetch(`${requestUrl}`);
  const data = await res.json();

  return (
    <div>
      <CurrencyPicker
        data={data}
        title="Select your base currency"
        isBaseCurrency={true}
      />
      <CurrencyPicker
        data={data}
        title="Select your target currency"
        isBaseCurrency={false}
      />
    </div>
  );
}
