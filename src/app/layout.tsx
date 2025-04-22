'use client'

import Header from "@/components/layout/header";
import "../styles/global.css";
import { Providers } from './provider';
import SidebarMenu from "@/components/layout/sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] lg:grid-cols-[250px_1fr] h-screen w-full">

            {/* Sidebar */}
            <div className="hidden md:block bg-[#282828] h-screen">
              <SidebarMenu />
            </div>

            {/* Main Content */}
            <div className="bg-[#181818] flex flex-col h-screen px-4 md:px-8 lg:px-20">
              <Header />
              <div className="flex flex-col overflow-y-auto">
                {children}
              </div>
            </div>

          </div>
        </Providers>
      </body>
    </html>
  );
}
