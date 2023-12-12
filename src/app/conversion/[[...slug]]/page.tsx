import Conversion from "@/components/Conversion";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex flex-1">
      <div className="container sm:px-[50px] md:px-[60px] lg:px-[70px] xl:max-w-[1260px]">
        <Conversion {...params} />
      </div>
    </main>
  );
}
