import { LayoutDashboard } from "lucide-react";
import { Layers } from "lucide-react";
import { Plus } from "lucide-react";
import { Heart } from "lucide-react";
import { CircleHelp } from "lucide-react";

export const sidebarItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "All Templates",
    url: "/all-templates",
    icon: Layers,
  },
  {
    title: "Create New Template",
    url: "/new-template",
    icon: Plus,
  },
  {
    title: "Favorite Templates",
    url: "/fav-templates",
    icon: Heart,
  },
  {
    title: "Help & Support",
    url: "/help-and-support",
    icon: CircleHelp,
  },
];
