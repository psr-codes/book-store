"use client";
import Header from "@/components/backend/Header";
import List from "@/components/backend/Index";
import Sidebar from "@/components/backend/Sidebar";
import React, { useState } from "react";


const Index = () => {
  const [selectedSection, setSelectedSection] = useState("Dashboard");

  return (
    <div className="bg-gray-100">
      <div className="flex h-screen overflow-hidden">
        {/* Pass selectedSection to Sidebar */}
        <Sidebar
          setSelectedSection={setSelectedSection}
          selectedSection={selectedSection}
        />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header />
          <main className="h-[900px] overflow-auto">
            <div className="mx-auto ">
              <SectionContent section={selectedSection} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

const SectionContent = ({ section }) => {
  switch (section) {
    case "Dashboard":
      return <List />;
    case "Calendar":
      return (
        <div className="text-3xl font-bold text-green-600">
          This is your Calendar
        </div>
      );
    case "Profile":
      return (
        <div className="text-3xl font-bold text-purple-600">
          User Profile Details
        </div>
      );
    case "DragonFly":
      return (
        <div className="text-3xl font-bold text-yellow-600">
          DragonFly Settings
        </div>
      );
    case "Settings":
      return (
        <div className="text-3xl font-bold text-red-600">System Settings</div>
      );
    case "Chart":
      return (
        <div className="text-3xl font-bold text-blue-600">Chart Overview</div>
      );
    case "Authentication":
      return (
        <div className="text-3xl font-bold text-pink-600">
          Authentication Settings
        </div>
      );
    default:
      return (
        <div className="text-3xl font-bold text-gray-600">
          Select a section from the sidebar
        </div>
      );
  }
};

export default Index;
