import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body
      style={{
        backgroundImage: `url(/bgImage/bg_body.png)`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        // backgroundImage: `url(/bgImage/bg_body.png), linear-gradient(135deg, rgb(255 254 217 / 0%) 2%, rgb(253 254 238 / 0%) 7%, rgb(255 255 255 / 0%) 15%, rgb(191 233 255 / 28%) 25%, rgb(255 255 255 / 68%) 36%, rgb(255 254 217 / 29%) 49%, rgb(251 250 235 / 70%) 73%, rgb(191 233 255 / 43%) 116%)`,
        margin: 0,
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  );
}
