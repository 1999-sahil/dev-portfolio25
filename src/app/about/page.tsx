import { Metadata } from "next";
import AboutMe from "./_component/aboutMe";

export const metadata: Metadata = {
  title: "About Me | Sahil Ahmed",
  description: "Learn more About me",
};

export default function Page() {
  return (
    <div>
        <AboutMe />
    </div>
  );
}
