import Button from "@/components/Button";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function UserBar() {
  return (
    <div className="hidden gap-2.5 lg:flex">
      <ThemeSwitch />
      <Button intent="secondary">Log in</Button>
      <Button>Learn More</Button>
    </div>
  );
}
