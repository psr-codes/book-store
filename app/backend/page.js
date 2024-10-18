"use client";
import Dashboard from "@/components/backend/Dashboard/Dashboard";
import Header from "@/components/backend/Header";
import List from "@/components/backend/Index";
import Login from "@/components/backend/Login";
import Sidebar from "@/components/backend/Sidebar";
import { auth } from "@/db/firebase";
import { useAuth } from "@/hooks/useAuth";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { adminEmail } from "@/data/siteData";

const Index = () => {
    const [selectedSection, setSelectedSection] = useState("Dashboard");
    const router = useRouter();
    const { user, loading } = useAuth();

    if (!loading && !user) {
        return <Login />;
    }

    if (user && user?.email !== adminEmail) {
        return (
            <div>
                <h1>Unauthorized</h1>
            </div>
        );
    }
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
// /sdfdf
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

        case "Contact Us":
            return (
                <div className="text-3xl font-bold text-red-600">
                    System Settings
                </div>
            );
        default:
            return <Dashboard />;
    }
};

export default Index;
