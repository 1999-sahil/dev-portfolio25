import VerticalSlider from "./text-slider";

function Introduction() {
  return (
    <div className="flex flex-col gap-3 px-4">
      <div className="flex flex-col-reverse lg:flex-row items-start gap-2">
        <div style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}>
          <h1 className="text-primary font-inter text-[28px] font-bold tracking-tighter drop-shadow-lg md:text-4xl">
            Sahil Ahmed
          </h1>
        </div>
        <VerticalSlider />
      </div>
      <p
        style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        className="max-w-xl font-inter text-sm font-normal leading-4 tracking-wider text-[#333]/70 dark:text-[#f4f4f4]/40"
      >
        A Full-Stack Developer with a solid foundation in building modern
        applications, with a focus on aesthetics, functionality, and
        accessibility.
      </p>
    </div>
  );
}

export default Introduction;