"use client";
import Dashboard from "@/components/backend/Dashboard/Dashboard";
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
      return <Dashboard />;
    case "Upload":
      return <List />;
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
    case "Contact Us":
      return (
        <div className="text-3xl font-bold text-red-600">System Settings</div>
      );
    default:
      return <Dashboard />;
  }
};

export default Index;
