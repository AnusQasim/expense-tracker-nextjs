"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useSidebar } from "@/hooks/use-sidebar";

export const SidebarToggle = () => {
  const { isOpen, toggle } = useSidebar();

  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      className="rounded-full absolute left-[12px]"
      onClick={() => toggle()}
      asChild
    >
      <motion.button
        initial={{ rotate: 0 }}
        animate={{
          rotate: isOpen ? 180 : 0,
          top: isOpen ? 4 : 8,
          left: isOpen ? 6 : 12,
        }}
      >
        <ChevronRight className="w-4 h-4" />
      </motion.button>
    </Button>
  );
};
