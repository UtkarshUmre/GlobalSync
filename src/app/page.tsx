import ClassyButton from "@/components/ui/ClassyButton";
import { GlobeDemo } from "@/components/World";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-5 bg-black">
      <div className="flex justify-center items-center absolute top-6 right-3 gap-2 ">
        <ClassyButton name="Login" />
        <ClassyButton name="Sign Up" />
      </div>
      <h1 className="leading-tight text-6xl mx-auto font-bold  dark:text-neutral-300 hover:text-white">
        GlobalSync
      </h1>
      <p className="text-3xl dark:text-neutral-500">
        Revolutionizing Global Workforce Management
      </p>
      <button className="p-[3px] relative mt-4">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Get Started
        </div>
      </button>
      <GlobeDemo />
    </div>
  );
}
