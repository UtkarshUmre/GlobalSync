"use client";

import { SidebarDemo } from "@/components/CustomSidebar";
import Dashboard from "@/components/Dashboard";

const GlobalSync = () => {
  return (
    <div className="">
      <SidebarDemo>
        <Dashboard />
      </SidebarDemo>
    </div>
  );
};

export default GlobalSync;
