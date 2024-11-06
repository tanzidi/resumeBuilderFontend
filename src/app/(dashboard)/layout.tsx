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
      <main className="flex-1 p-6 mt-10 font-dmSans">
        {children}
      </main>
    </div>
  );
}
