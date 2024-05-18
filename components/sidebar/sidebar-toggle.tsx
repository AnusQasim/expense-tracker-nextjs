"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface SidebarToggleProps {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

export const SidebarToggle = ({
  isExpanded,
  setIsExpanded,
}: SidebarToggleProps) => {
  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      className="rounded-full absolute left-[12px]"
      onClick={() => setIsExpanded(!isExpanded)}
      asChild
    >
      <motion.button
        initial={{ rotate: 0 }}
        animate={{
          rotate: isExpanded ? 180 : 0,
          top: isExpanded ? 4 : 8,
          left: isExpanded ? 6 : 12,
        }}
      >
        <ChevronRight className="w-4 h-4" />
      </motion.button>
    </Button>
  );
};
