import { Navbar, Sidebar } from "@/components";
import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex w-full">
      {/* TODO: Sidebar */}
      <Sidebar />
      <section className="flex-1 flex-grow w-full bg-[#42484a]">
        <Navbar />
        <div className="py-16 px-4 text-white min-h-screen">{children}</div>
      </section>
    </section>
  );
}
