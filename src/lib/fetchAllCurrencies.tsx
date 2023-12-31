const API_KEY = process.env.EXCHANGE_API_KEY;

export default async function fetchAllCurrencies() {
  const requestUrl = `https://api.freecurrencyapi.com/v1/currencies ?
    apikey = ${API_KEY}`.replace(/\s/g, "");

  const response = await fetch(`${requestUrl}`);

  if (!response.ok) {
    throw new Error("Failed to fetch currencies from API");
  }

  let data = (await response.json()).data;
  delete data["RUB"]; // 🇺🇦

  return data;
}
