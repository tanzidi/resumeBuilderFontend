'use client';

import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 p-6 font-dmSans overflow-y-auto sm:mt-10 max-h-screen custom-scrollbar">
        <div className="pb-16 sm:pb-0">{children}</div>
      </main>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
