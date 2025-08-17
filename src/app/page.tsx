import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default async function Home() {

  return (
    <div>
      <ModeToggle />
      <Link href="/blogs">Blogs</Link>
    </div>
  );
}
