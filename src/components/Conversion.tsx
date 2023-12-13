import getAllCurrencies from "@/lib/getCurrencies";
import getPairConversionRate from "@/lib/getPairConversionRate";
import Converter from "./Converter";

export default async function Conversion(params: { slug: string }) {
  const allCurrenciesData = await getAllCurrencies();
  const conversionPair = [params.slug[0], params.slug[1]];
  const pairConversionRateData = await getPairConversionRate(
    conversionPair[0],
    conversionPair[1],
  );

  return (
    <div className="text-center">
      <h2 className="mb-4 hidden text-2xl font-bold text-text-heavy xs:mb-6 xs:text-3xl md:mb-8 md:block md:text-[42px]">
        Currency<span className="text-accent-heavy">pro</span> Converter
      </h2>
      <p className="text-md bm-4 mt-0 text-text xs:my-6 xs:text-lg md:my-8 md:text-2xl">
        Check live foreign currency exchange rates
      </p>

      <Converter
        allCurrenciesData={allCurrenciesData}
        conversionPair={conversionPair}
        pairConversionRateData={pairConversionRateData}
      />
    </div>
  );
}
