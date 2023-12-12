import CurrencyPickersWrap from "@/components/CurrencyPickersWrap";
import ResultControls from "@/components/ResultControls";

export default function Home() {
  return (
    <main className="flex flex-1">
      <div className="container sm:px-[50px] md:px-[60px] lg:px-[70px] xl:max-w-[1260px]">
        <CurrencyPickersWrap />

        <ResultControls />
      </div>
    </main>
  );
}
