import FeaturedBlogs from "@/components/featured-blogs";
import FeaturedProject from "@/components/featured-project";
import Introduction from "@/components/introduction";
import Scales from "@/components/scales";
import Work from "@/components/work";

export default async function Home() {

  return (
    <div className="relative bg-neutral-50 dark:bg-[#0e100f] w-full h-full min-h-screen">
      <Scales />
      <section className="px-2 pt-20 lg:px-8">
        <Introduction />
        <FeaturedProject />
        <FeaturedBlogs />
        <Work />
      </section>
    </div>
  );
}
