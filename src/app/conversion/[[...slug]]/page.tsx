import Conversion from "@/components/Conversion";
import { Suspense } from "react";

const API_KEY = process.env.EXCHANGE_API_KEY;

export default async function Page({ params }: { params: { slug: string } }) {
  const requestUrl =
    `https://api.freecurrencyapi.com/v1/latest ? apikey = ${API_KEY} & currencies = ${params.slug[1]} & base_currency = ${params.slug[0]}`.replace(
      /\s/g,
      "",
    );
  const res = await fetch(`${requestUrl}`);
  const data = await res.json();

  console.log(params.slug);
  console.log(data);

  return (
    <main className="flex flex-1">
      <div className="container sm:px-[50px] md:px-[60px] lg:px-[70px] xl:max-w-[1260px]">
        <Suspense fallback={<div>Loading...</div>}>
          <Conversion data={data} />
        </Suspense>
      </div>
    </main>
  );
}
