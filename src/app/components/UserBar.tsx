import Button from "@/components/Button";

export default function UserBar() {
  return (
    <div className="hidden gap-2.5 lg:flex">
      <Button intent="secondary">Log in</Button>
      <Button>Learn More</Button>
    </div>
  );
}
