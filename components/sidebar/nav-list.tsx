import { NavItemType } from "@/types/nav-item";
import {
  Banknote,
  CalendarCheck2,
  CalendarClock,
  Goal,
  HandCoins,
  Home,
  PieChart,
  ReceiptText,
} from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const NavList = ({ isExpanded }: { isExpanded: boolean }) => {
  const navList: NavItemType[] = [
    { label: "Home", icon: <Home />, onClick: () => {} },
    { label: "Transactions", icon: <Banknote />, onClick: () => {} },
    { label: "Budgets", icon: <PieChart />, onClick: () => {} },
    { label: "Goals", icon: <Goal />, onClick: () => {} },
    { label: "Subscriptions", icon: <CalendarClock />, onClick: () => {} },
    { label: "Scheduled", icon: <CalendarCheck2 />, onClick: () => {} },
    { label: "Loans", icon: <HandCoins />, onClick: () => {} },
    { label: "All Spending", icon: <ReceiptText />, onClick: () => {} },
  ];

  return (
    <nav className="flex flex-col gap-0.5 w-full">
      {navList.map((item: NavItemType) => (
        <Button
          key={item.label}
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
              width: isExpanded ? "100%" : 48,
              paddingLeft: isExpanded ? 24 : 0,
              paddingRight: isExpanded ? 24 : 0,
            }}
          >
            <motion.div
              initial={{ left: "calc(50% - 10px)" }}
              animate={{ left: isExpanded ? "24px" : "calc(50% - 10px)" }}
              className="*:w-5 *:h-5 absolute"
            >
              {item.icon}
            </motion.div>
            <motion.span
              className={cn("origin-left")}
              initial={{
                marginLeft: 0,
                scaleX: 0,
              }}
              animate={{
                marginLeft: isExpanded ? 36 : 0,
                scaleX: isExpanded ? 1 : 0,
              }}
            >
              {item.label}
            </motion.span>
          </motion.button>
        </Button>
      ))}
    </nav>
  );
};
