"use client";

import React from "react";
import { useSidebar } from "../ui/sidebar";
import { Button } from "../ui/button";

const SidebarToggler = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <Button variant={"outline"} onClick={toggleSidebar}>
      ⇄
    </Button>
  );
};

export default SidebarToggler;
