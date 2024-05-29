import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[45rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="py-4 relative z-10 w-full text-center">
        <h1 className="mt-40 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Pranav Dhiman's PortFolio
        </h1>
        <p className="mt-20 font-normal text-base md:text-lg text-neutral-300 max-w-xl mx-auto">
          A versatile web developer and avid gamer, blending a passion for both
          worlds seamlessly. With a sharp focus on web development and ML , I've
          crafted this project utilizing cutting-edge technologies such as 
          <b> Next.js, TypeScript</b>, and UI framework like  <b>Aceternity UI</b> and <b>Shadcn</b>. Dive into my work to witness the
          fusion of creativity and technical prowess in action.
        </p>
        <div className="mt-10">
          <Link href={"/projects"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 text-base"
            >
              Explore Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
