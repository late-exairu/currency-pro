import Icons from "@/components/Icons";

interface SocialsProps {
  list: SocialsItem[];
  className?: string;
}

interface SocialsItem {
  id: number;
  name: string;
  icon: string;
  url: string;
}

export default function Socials(props: SocialsProps) {
  const { list, className } = props;

  return (
    <ul className={`${className} mx-auto flex flex-wrap gap-3 md:gap-6`}>
      {list.map((item) => (
        <li key={item.id}>
          <a
            className="bg-surface hover:bg-surface-heavy flex h-10 w-10 items-center justify-center rounded-full transition-colors"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons
              className="fill-text-heavy h-5 w-5"
              icon={item.icon}
              title={item.name}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
