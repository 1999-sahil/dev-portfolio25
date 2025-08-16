import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div>
      <h2 className="font-inter font-bold">Home Page (inter)</h2>
      <h2 className="font-poppins font-bold">Home Page (poppins)</h2>
      <h2 className="font-openSans font-bold">Home Page (open_sans)</h2>

      <ModeToggle />
    </div>
  );
}
