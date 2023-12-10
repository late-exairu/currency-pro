import CurrenciesPicker from "./components/CurrenciesPicker";

export default function Home() {
  return (
    <main className="flex flex-1">
      <div className="container sm:px-[50px] md:px-[60px] lg:px-[70px] xl:max-w-[1260px]">
        <CurrenciesPicker title="Select your base currency" base={true} />
        <CurrenciesPicker title="Select your target currency" base={false} />
      </div>
    </main>
  );
}
