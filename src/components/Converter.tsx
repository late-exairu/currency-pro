export default async function Converter(
  allCurrenciesData: any,
  pairConversionRateData: any,
) {
  return (
    <div>
      {JSON.stringify(allCurrenciesData)}
      {JSON.stringify(pairConversionRateData)}
    </div>
  );
}
