import Scales from "@/components/scales";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-neutral-50 dark:bg-[#0e100f] w-full h-full">
      <Scales />
      <section className="px-2 pt-16 pb-10 lg:px-8 min-h-screen">
        {children}
      </section>
    </div>
  );
}