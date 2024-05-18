"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useTransactionModal } from "@/hooks/use-transaction-modal";

export const FAB = () => {
  const { onOpen } = useTransactionModal();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="absolute right-4 bottom-4 h-16 w-16" asChild>
          <Button size={"icon"} className="rounded-3xl shadow" onClick={onOpen}>
            <Plus className="w-8 h-8" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add transaction</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
