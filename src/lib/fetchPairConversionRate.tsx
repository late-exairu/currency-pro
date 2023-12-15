const API_KEY = process.env.EXCHANGE_API_KEY;

export default async function fetchPairConversionRate(
  baseCurrency: string,
  targetCurrency: string,
) {
  const requestUrl =
    `https://api.freecurrencyapi.com/v1/latest ? apikey = ${API_KEY} &
    base_currency = ${baseCurrency} &
    currencies = ${targetCurrency}`.replace(/\s/g, "");

  const response = await fetch(`${requestUrl}`);

  if (!response.ok) {
    throw new Error("Failed to fetch pair conversion rate from API");
  }

  return await response.json();
}
