"use client";

import Header from "@/components/layout/header/header";
import "../styles/globals.css";
import { Providers } from "./provider";
import SidebarMenu from "@/components/layout/sidebar";
import { Comfortaa, Open_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import TabNavigator from "@/components/layout/tab-navigation";
import MobileViewHeader from "@/components/layout/header/mobile-view-header";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});


const checkAuthentication = () => {
  return true;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const authStatus = checkAuthentication();
    setIsAuthenticated(authStatus);
  }, []);

  if (isAuthenticated === null) {
    return (
      <html lang="en" className={`${comfortaa.className} ${openSans.className}`}>
        <body>
        <Providers>
          <p>loding...</p>
        </Providers></body>

      </html>
    );
  }

  if (!isAuthenticated) {
    return (
      <html lang="en" className={`${comfortaa.className} ${openSans.className}`}>

        <body className="bg-[#181818]">
          <Providers>
            {children}
          </Providers>
        </body>


      </html>
    );
  }

  return (
    <html lang="en" className={`${comfortaa.className} ${openSans.className}`}>
      <body>
        <Providers>
          {isAuthenticated ?
            (<div className="grid grid-cols-1 md:grid-cols-[100px_1fr] lg:grid-cols-[250px_1fr] h-screen w-full overflow-hidden">
 

                 
              {/* Sidebar */}
              <div className="hidden md:block bg-[#282828] h-screen">
                <SidebarMenu />
              </div>
              <div className="md:hidden fixed bg-[#181818] w-full border-t  border-[#444] flex justify-around items-center h-[90px] z-50 px-5 pt-5">
                   <MobileViewHeader/>    
              </div>
              {/* Main Content */}
              <div className="bg-[#181818] flex flex-col h-screen px-5 ">
                <Header />
                <div className="flex flex-col overflow-y-auto no-scrollbar">{children}</div>
                <div className="md:hidden fixed bottom-0 left-0 w-full  flex justify-around items-center h-[90px] bg-[#181818]">
                  <TabNavigator/>
   
                </div>
              </div>

            </div>) : (<div>{children}</div>)
          }
        </Providers>
      </body>
    </html>
  );
}
