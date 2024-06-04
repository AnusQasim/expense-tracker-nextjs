import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ChevronDownIcon, FileSlidersIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/hooks/use-sidebar";

export const NavListDropdown = () => {
  return <></>;
};

export const NavListDropdownToggle = () => {
  const { isOpen } = useSidebar();
  return (
    <Button
      className="w-full flex items-center justify-start h-12 rounded-3xl relative"
      variant={"ghost"}
      asChild
    >
      <motion.button
        initial={{
          width: 48,
          paddingLeft: 0,
          paddingRight: 0,
        }}
        animate={{
          width: isOpen ? "100%" : 48,
          paddingLeft: isOpen ? 24 : 0,
          paddingRight: isOpen ? 24 : 0,
        }}
      >
        <motion.div
          initial={{ left: "calc(50% - 10px)" }}
          animate={{ left: isOpen ? "24px" : "calc(50% - 10px)" }}
          className="*:w-5 *:h-5 absolute"
        >
          <FileSlidersIcon />
        </motion.div>
        <motion.span
          className={cn("origin-left flex items-center w-full")}
          initial={{
            marginLeft: 0,
            scaleX: 0,
          }}
          animate={{
            marginLeft: isOpen ? 36 : 0,
            scaleX: isOpen ? 1 : 0,
          }}
        >
          Edit Data <ChevronDownIcon className="ml-auto mr-0 w-4 h-4" />
        </motion.span>
      </motion.button>
    </Button>
  );
};
