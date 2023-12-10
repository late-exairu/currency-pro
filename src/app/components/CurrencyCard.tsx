export default function CurrencyCard(props: {
  code: string;
  name: string;
  symbol: string;
}) {
  const { code, name, symbol } = props;
  return (
    <button
      data-currency-
      className="transition-shadow] relative flex min-h-[73px] flex-col rounded-2xl bg-surface-light px-6 py-3 text-left shadow-[0_2px_20px_0_rgba(0,0,0,0.12)] hover:shadow-[0_2px_20px_0_rgba(0,0,0,0.18)] dark:bg-surface"
    >
      <span className="text-[22px] font-semibold">{code}</span>
      <span className="text-sm text-text">{name}</span>
      <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-surface text-xs text-text">
        {symbol}
      </span>
    </button>
  );
}
