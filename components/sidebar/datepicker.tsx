"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSidebar } from "@/hooks/use-sidebar";

export const DatePicker = () => {
  const { isOpen } = useSidebar();
  const [date, setDate] = useState<Date>();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const dateId = setInterval(() => setCurrentDate(new Date()), 1000);

    return () => clearInterval(dateId);
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            "w-full h-32 flex flex-col items-center justify-center gap-1 origin-top-left rounded-3xl"
          )}
          asChild
        >
          <motion.button
            initial={{
              scale: 0,
              opacity: 0,
              width: 0,
              height: 0,
              marginBottom: 0,
            }}
            animate={{
              scale: isOpen ? 1 : 0,
              opacity: isOpen ? 1 : 0,
              width: isOpen ? "100%" : 0,
              height: isOpen ? 128 : 0,
              marginBottom: isOpen ? 32 : 0,
            }}
            transition={{ ease: "easeInOut" }}
          >
            <span className="text-5xl font-bold">
              {format(currentDate, "h")}:{format(currentDate, "mm")}{" "}
              <span className="text-xl">{format(currentDate, "a")}</span>
            </span>

            <span className="text-xl font-bold text-muted-foreground">
              {format(date || currentDate, "eeee")}
            </span>
            <span className="text-base text-muted-foreground font-light">
              {format(date || currentDate, "MMM d, yyyy")}
            </span>
          </motion.button>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
