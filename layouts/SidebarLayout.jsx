"use client";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function SidebarLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen">
        <div className="p-2">
          <SidebarTrigger />
        </div>
        <>{children}</>
      </main>
    </SidebarProvider>
  );
}
