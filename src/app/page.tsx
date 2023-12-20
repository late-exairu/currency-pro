import CurrencyPickersWrap from "@/components/CurrencyPickersWrap";
import ResultControls from "@/components/ResultControls";

export default function Home() {
  return (
    <main className="mt-8 flex flex-1 xs:mt-10 md:mt-12">
      <div className="container sm:px-[50px] md:px-[60px] lg:px-[70px] xl:max-w-[1260px]">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-text-heavy sm:text-3xl md:text-[42px] md:leading-tight">
            The safe and easy way to{" "}
            <b className="font-semibold text-accent">exchange</b> your{" "}
            <b className="font-semibold text-accent">money</b>
          </h2>
          <p className="my-3 text-base text-text sm:my-5 sm:text-lg md:my-6 lg:text-2xl">
            You always get the best exchange rate with CurrencyPro, whether you
            send, spend, or convert money in dozens of currencies. But don’t
            take our word for it.
          </p>
        </div>

        <CurrencyPickersWrap />

        <ResultControls />
      </div>
    </main>
  );
}
