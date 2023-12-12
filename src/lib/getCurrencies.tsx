const API_KEY = process.env.EXCHANGE_API_KEY;

export default async function getAllCurrencies() {
  const requestUrl = `https://api.freecurrencyapi.com/v1/currencies ?
    apikey = ${API_KEY}`.replace(/\s/g, "");

  const response = await fetch(`${requestUrl}`);

  if (!response.ok) {
    throw new Error("Failed to fetch currencies from API");
  }

  return await response.json();
}
