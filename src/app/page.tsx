import CurrencyPickersWrap from "@/components/CurrencyPickersWrap";
import TrackBtn from "./components/TrackBtn";

export default function Home() {
  return (
    <main className="flex flex-1">
      <div className="container sm:px-[50px] md:px-[60px] lg:px-[70px] xl:max-w-[1260px]">
        <CurrencyPickersWrap />

        <TrackBtn />
      </div>
    </main>
  );
}
