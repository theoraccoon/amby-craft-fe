'use client';
import "../../styles/global.css"


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <div className="h-full flex flex-col">
          {children}
        </div>
    </>
  );
}
