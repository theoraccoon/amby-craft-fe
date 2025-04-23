"use client";


import Header from "@/components/layout/header/header";
import "../styles/globals.css";
import { Providers } from "./provider";
import SidebarMenu from "@/components/layout/sidebar";
import { Comfortaa, Open_Sans } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${comfortaa.className} ${openSans.className}`}>
      <body>
        <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] lg:grid-cols-[250px_1fr] h-screen w-full">
          <Providers>
            {/* Sidebar */}
            <div className="hidden md:block bg-[#282828] h-screen">
              <SidebarMenu />
            </div>

            {/* Main Content */}
            <div className="bg-[#181818] flex flex-col h-screen !px-10 md:px-8 lg:!px-10 !py-5">
              <Header />
              <div className="flex flex-col overflow-y-auto">{children}</div>
            </div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
