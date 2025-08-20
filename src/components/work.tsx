
function Work() {
  return (
    <div className="mt-4 px-4 py-6">
      <h2 className="relative mt-4 w-fit max-w-lg text-sm font-poppins font-normal text-neutral-800 md:text-base dark:text-neutral-300">
        <div
          className="absolute inset-0 h-full w-full scale-[1.04] bg-neutral-100 dark:bg-neutral-800"
          style={{ opacity: 1 }}
        >
          <div className="absolute -top-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
          <div className="absolute -top-px -right-px h-1 w-1 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
          <div className="absolute -bottom-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
          <div className="absolute -right-px -bottom-px h-1 w-1 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
        </div>
        <span
          className="inline-block"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          Career&nbsp;
        </span>
        <span
          className="inline-block"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          Journey&nbsp;
        </span>
        <span
          className="inline-block"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          and&nbsp;
        </span>
        <span
          className="inline-block"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          Timeline&nbsp;
        </span>
      </h2>
      <p className="my-4 font-poppins text-sm font-normal text-neutral-500 dark:text-neutral-400">
        Worked with a reputated organizations
      </p>
    </div>
  );
}

export default Work;
