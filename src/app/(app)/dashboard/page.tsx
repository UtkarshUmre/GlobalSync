"use client";

import Link from "next/link";

export default function Dashboard() {
  const stats = [
    { label: "Team Members", value: "3" },
    { label: "Time Zones", value: "3" },
    { label: "Avg. Productivity", value: "85%" },
    { label: "CO₂ Saved", value: "125 kg" },
  ];
  const members = [
    { label: "Sarah Johnson", status: "online", timezone: "PST" },
    { label: "Raj Patel", status: "busy", timezone: "IST" },
    { label: "Emma Schmid", status: "away", timezone: "CET" },
  ];

  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex justify-between">
          <h1 className="text-4xl">Dashboard</h1>
          <Link href="/scheduling">
            <button className="p-[3px] relative mt-4 -top-4">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg" />
              <div className="px-4 py-1  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Schedule Meet
              </div>
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-4 grid-rows-4 gap-4">
          <div className="col-span-3 row-span-4 bg-neutral-800 backdrop-blur-lg border border-neutral-600 rounded-lg p-2 ">
            <h1 className="text-2xl flex justify-center m-5">
              🌐 Global Team Overview
            </h1>
            <div className="grid grid-cols-4 grid-rows-1 gap-2 p-2 w-full my-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="col-span-1 row-span-1 bg-neutral-600 rounded-lg p-2 text-center"
                >
                  <p>{stat.label}:</p>
                  <p className="font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1 row-span-4 bg-neutral-800 backdrop-blur-lg border border-neutral-600 rounded-lg p-2">
            <h1 className="text-xl flex justify-center m-5">
              Team Availability
            </h1>
            <div className="grid grid-cols-1 gap-2 p-2 w-full my-4 ">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="col-span-1 row-span-1 bg-neutral-600 rounded-lg p-2 text-start"
                >
                  <p>{member.label}:</p>
                  <div className="flex justify-between items-center">
                    <p className="font-light text-neutral-400 text-sm">
                      {member.timezone}
                    </p>
                    <p className="">{member.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
