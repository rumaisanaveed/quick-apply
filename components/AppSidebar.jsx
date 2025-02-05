"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { sidebarItems } from "@/constants/data";
import Link from "next/link";
import { signOut } from "next-auth/react";

export function AppSidebar() {
  const handleLogoutClick = () => {
    signOut();
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="flex flex-col items-start justify-between h-full py-10 px-5">
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <p>{item.title}</p>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <button
            onClick={handleLogoutClick}
            className="flex items-center justify-center w-full text-left py-2 rounded-md text-white bg-black"
          >
            Logout
          </button>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
