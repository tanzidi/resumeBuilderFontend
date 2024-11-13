import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./lib/Provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const dmSans = localFont({
  src: "./fonts/DMSansMedium.ttf",
  variable: "--font-dm-sans",
});

const gilroy = localFont({
  src: "./fonts/Gilroy-Bold.ttf",
  variable: "--font-gilory",
});

export const metadata: Metadata = {
  title: "Placed App",
  description: "Automation job apply",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable}  ${gilroy.variable} antialiased`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
