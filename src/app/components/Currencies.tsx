import CurrencyCard from "./CurrencyCard";

const API_KEY = process.env.EXCHANGE_API_KEY;

export default async function Currencies() {
  const res = await fetch(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`,
  );

  const data = await res.json();

  return (
    <div>
      <ul className="grid grid-cols-2 gap-x-[18px] gap-y-[35px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.supported_codes.map((code: string) => (
          <CurrencyCard key={code} code={code} />
        ))}
      </ul>
    </div>
  );
}
