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
import { Button } from "./ui/button";

export function AppSidebar() {
  const handleLogoutClick = () => {};

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
          <Button
            onClick={handleLogoutClick}
            className="flex items-center justify-center w-full text-left p-5 rounded-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 "
          >
            <p className="py-5">Logout</p>
          </Button>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
