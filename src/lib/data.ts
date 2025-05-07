import {
  Calendar,
  DollarSign,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";

export const sidebarItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },

  {
    title: "Payments",
    url: "payments",
    icon: DollarSign,
  },

  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
