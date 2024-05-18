"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import type { ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";

export const ModeToggle = ({ className, ...props }: ButtonProps) => {
  const theme = useTheme();

  const changeTheme = () => {
    if (theme.resolvedTheme == "light") {
      theme.setTheme("dark");
    } else {
      theme.setTheme("light");
    }
  };

  return (
    <Button
      className={cn(className)}
      {...props}
      onClick={changeTheme}
      size={"icon"}
    >
      {theme.resolvedTheme == "light" ? <Sun /> : <Moon />}
    </Button>
  );
};
