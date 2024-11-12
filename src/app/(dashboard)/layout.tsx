'use client';

import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden font-dmSans">
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-full">
        <div className="pt-16 sm:pt-14 pb-5 sm:pb-0 h-full overflow-y-auto custom-scrollbar">
          <div className="px-6 sm:px-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
