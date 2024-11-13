import React from "react";
import Header from "../component/Header/Header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      <Header />
      <main>{children}</main>
    </body>
  );
}
