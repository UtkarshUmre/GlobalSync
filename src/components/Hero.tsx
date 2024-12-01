import Link from "next/link";
import { GlobeDemo } from "./World";
import ClassyButton from "./ui/ClassyButton";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5 bg-black">

      <img src="/Globalsync.png" alt="GlobalSync" width={100} className="absolute top-0 left-3"/>
      <div className="flex justify-center items-center absolute top-6 right-3 gap-2 ">
        <Link href="/login">
          <ClassyButton name="Login" />
        </Link>
        <Link href="/sign-up">
          <ClassyButton name="Sign Up" />
        </Link>
      </div>
     
      <h1 className="leading-tight text-6xl mx-auto font-bold  bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent hover:text-cyan-200">
        GlobalSync
      </h1>
      <p className="text-3xl dark:text-slate-400">
        Revolutionizing Global Workforce Management
      </p>
      <Link href="/dashboard">
        <button className="p-[3px] relative mt-4">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Get Started
          </div>
        </button>
      </Link>
      <GlobeDemo />
    </div>
  );
};

export default Hero;
