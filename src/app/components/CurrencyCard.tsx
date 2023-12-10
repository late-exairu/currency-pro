export default function CurrencyCard(props: { title: string; body: string }) {
  const { title, body } = props;
  return (
    <button
      data-currency-
      className="transition-shadow] flex min-h-[73px] flex-col rounded-2xl bg-surface-light px-6 py-3 text-left shadow-[0_2px_20px_0_rgba(0,0,0,0.12)] hover:shadow-[0_2px_20px_0_rgba(0,0,0,0.18)] dark:bg-surface"
    >
      <span className="text-[22px] font-semibold">{title}</span>
      <span className="text-sm text-text">{body}</span>
    </button>
  );
}
