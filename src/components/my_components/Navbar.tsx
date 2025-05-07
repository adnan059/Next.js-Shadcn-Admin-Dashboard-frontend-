import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ModeToggle } from "./ThemeToggler";
import SidebarToggler from "./SidebarToggler";
//import { SidebarTrigger } from "../ui/sidebar";

const Navbar = () => {
  return (
    <nav className="px-4 py-3.5 flex items-center justify-between sticky top-0 bg-background z-10 ">
      {/* Left */}
      {/* <SidebarTrigger /> */}
      <SidebarToggler />

      {/* Right */}
      <div className="flex items-center gap-4">
        <Link href={"/"}>Dashboard</Link>
        <ModeToggle />

        {/* --- dropdown --- */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="cursor-pointer">
              <AvatarImage src="/images/user.png" alt="@shadcn" />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
