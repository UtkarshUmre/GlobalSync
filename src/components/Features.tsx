"use client";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { Button } from "./ui/moving-border";

const features = [
  {
    title: "Time Zone Optimization",
    description:
      "AI-powered recommendations for meeting times that are convenient for all team members across various time zones. ",
      thumbnail: "/timetable.png",
  },
  {
    title: "Kestra Integration",
    description:
      "Leverage Kestra workflows for streamlined task automation and scheduling. Simplify workflows with robust event-driven automation.",
    thumbnail: "/Kestra-logo-white.svg",
  },
  {
    title: "Team Management",
    description:
      "Centralized platform for team schedules. Manage availability and priorities at a glance.",
    thumbnail: "/conversation.png",
  },
  // {
  //   title: "Customizable Notifications",
  //   description:
  //     "Smart reminders for meetings and deadlines tailored to individual preferences. Reduce meeting fatigue with optimized scheduling.",
  // },
  {
    title: "User-Friendly Interface",
    description:
      "A sleek and modern design for intuitive navigation. Accessible on web and mobile for flexibility.",
    thumbnail: "/search.png",
  },
];

const Features = () => {
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8  text-transparent md:text-7xl"
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-8xl text-white">
              Empower Your{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-600  bg-clip-text text-transparent hover:text-cyan-200">
                Productivity
              </span>
            </h1>
            <p className="text-slate-400 text-xl tracking-widest">
              Smart Scheduling Features for Seamless Collaboration
            </p>
          </div>
          <div className="w-[80%] mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10 mx-[10%]">
            {features.map((feature, index) => (
              <Button
                key={index}
                //   random duration will be fun , I think , may be not
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  //   add these two
                  //   you can generate the color from here https://cssgradient.io/

                  // add this border radius to make it more rounded so that the moving border is more realistic
                  borderRadius: `calc(1.75rem* 0.96)`,
                }}
                // remove bg-white dark:bg-slate-900
                className="flex-1 border-neutral-200 dark:border-slate-800"
              >
                <div className="flex lg:flex-row flex-col lg:items-center p-1 py-3 md:p-2 lg:p-5 gap-2">
                  <img
                  src={feature.thumbnail}
                  alt={feature.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                  <div className="lg:ms-5">
                    <h1 className="text-start text-2xl md:text-3xl font-medium">
                      {feature.title}
                    </h1>
                    <p className="text-start text-xl text-slate-300 mt-3 font-thin">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </motion.h1>
      </LampContainer>
    </>
  );
};

export default Features;
