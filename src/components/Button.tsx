import { cva, type VariantProps } from "class-variance-authority";

const button = cva("items-center font-medium transition-colors", {
  variants: {
    intent: {
      primary: [
        "bg-accent-heavy",
        "text-white",
        "border-transparent",
        "hover:bg-accent",
        "dark:text-text-heavy",
      ],
      secondary: [
        "bg-transparent",
        "text-text-heavy",
        "border-transparent",
        "hover:bg-surface",
        "hover:text-accent",
      ],
    },
    rounding: {
      full: ["rounded-full"],
      medium: ["rounded-md"],
    },
    size: {
      small: ["text-sm", "h-8", "px-4"],
      medium: ["text-base", "h-[48px]", "px-6"],
    },
  },
  defaultVariants: {
    intent: "primary",
    rounding: "full",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export default function Button({
  className,
  children,
  intent,
  size,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={button({ intent, size, className })}>
      {children}
    </button>
  );
}
