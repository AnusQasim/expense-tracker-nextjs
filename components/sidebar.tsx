"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SidebarToggle } from "./sidebar/sidebar-toggle";
import { DatePicker } from "./sidebar/datepicker";
import { NavList } from "./sidebar/nav-list";

export const Sidebar = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.aside
      className="border-r h-screen flex flex-col flex-shrink-0 items-center pb-4 px-2 bg-white z-50"
      initial={{ width: "64px" }}
      animate={{
        width: isExpanded ? "280px" : "64px",
        paddingTop: isExpanded ? "52px" : "56px",
      }}
      transition={{ ease: "easeInOut" }}
    >
      <SidebarToggle isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <DatePicker isExpanded={isExpanded} />
      <NavList isExpanded={isExpanded} />
    </motion.aside>
  );
};
