import Button from "@/components/Button";
import DarkModeSwitch from "@/components/DarkModeSwitch";

export default function UserBar() {
  return (
    <div className="hidden gap-2.5 lg:flex">
      <DarkModeSwitch />
      <Button intent="secondary">Log in</Button>
      <Button>Learn More</Button>
    </div>
  );
}
