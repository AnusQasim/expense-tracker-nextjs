"use client";
import { useTransactionModal } from "@/hooks/use-transaction-modal";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { Amount } from "./transaction/amount";

export const TransactionModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { isOpen, onClose } = useTransactionModal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleClose = (open: boolean) => {
    if (!open) onClose();
  };

  return (
    <motion.div
      className="absolute w-full h-full bg-white z-10 origin-bottom-right"
      initial={{ bottom: 16, right: 16, scale: 0 }}
      animate={{
        bottom: isOpen ? 0 : 16,
        right: isOpen ? 0 : 16,
        scale: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4 h-16 pl-4">
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={onClose}
          className="rounded-3xl"
        >
          <ArrowLeft />
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Add Transaction</h1>
      </div>

      <div className="w-full h-[100%-64px] grid grid-cols-2 gap-4 p-4">
        <Amount />
      </div>
    </motion.div>
  );
};
