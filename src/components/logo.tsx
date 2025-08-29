import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="cursor-pointer flex items-center justify-center w-fit ring-1 rounded-full p-[2px] ring-neutral-300 dark:ring-neutral-700 hover:ring-neutral-200 dark:hover:ring-neutral-800"
    >
      <Image
        src="/profile.png"
        alt="logo"
        width={35}
        height={35}
        className="max-md:w-[30px] max-md:h-[30px]"
      />
    </Link>
  );
}

export default Logo;