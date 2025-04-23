"use client";
import "../../styles/globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </>
  );
}
