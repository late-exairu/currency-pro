import Conversion from "@/components/Conversion";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="mt-8 flex flex-1 xs:mt-10 md:mt-12">
      <div className="container sm:px-[50px] md:px-[60px] lg:px-[70px] xl:max-w-[1260px]">
        <Conversion {...params} />
      </div>
    </main>
  );
}
