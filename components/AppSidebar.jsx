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
import { lowerSidebarItems, sidebarUpperItems } from "@/constants/data";
import Link from "next/link";
import { Button } from "./ui/button";

export function AppSidebar() {
  const handleLogoutClick = () => {};

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="flex flex-col items-start justify-between h-full py-10 px-5">
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarUpperItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <Button
            onClick={handleLogoutClick}
            className="flex items-center w-full text-left p-5 rounded-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 "
          >
            <lowerSidebarItems.icon />
            <p className="py-5">Logout</p>
          </Button>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
