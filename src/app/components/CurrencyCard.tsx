export default function CurrencyCard(props: { code: string }) {
  const { code } = props;
  return (
    <button
      data-currency-
      className="bg-surface-light dark:bg-surface transition-shadow] flex min-h-[73px] flex-col rounded-2xl px-6 py-3 text-left shadow-[0_2px_20px_0_rgba(0,0,0,0.12)] hover:shadow-[0_2px_20px_0_rgba(0,0,0,0.18)]"
    >
      <span className="text-[22px] font-semibold">{code[0]}</span>
      <span className="text-text text-sm">{code[1]}</span>
    </button>
  );
}
