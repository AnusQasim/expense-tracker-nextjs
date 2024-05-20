"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
  SandwichIcon,
} from "lucide-react";
import { ExpenseTab } from "./expense-tab";
import { IncomeTab } from "./income-tab";
import { useTransactionModal } from "@/hooks/use-transaction-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  category: z.string(),
  amount: z.string(),
  title: z.string(),
  description: z.string(),
  type: z.string(),
});

export const Amount = () => {
  const { type, setType } = useTransactionModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      amount: "",
      title: "",
      description: "",
      type: type,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="space-y-2">
      <Tabs className="w-full" defaultValue="expense">
        <TabsList className="w-full">
          <TabsTrigger
            value="expense"
            className="w-full"
            onClick={() => setType("expense")}
          >
            <ChevronDownIcon className="w-4 h-4 mr-2" /> Expense
          </TabsTrigger>
          <TabsTrigger
            value="income"
            className="w-full"
            onClick={() => setType("income")}
          >
            <ChevronUpIcon className="w-4 h-4 mr-2" /> Income
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid grid-cols-3 gap-4">
        <Button variant={"outline"} className="flex items-center">
          <SandwichIcon className="w-6 h-6 mr-2" />
          <span>Dining</span>
          <ChevronsUpDownIcon className="ml-auto w-4 h-4 text-muted-foreground" />
        </Button>

        <Input className="col-span-2 text-right" placeholder="$0.00" />
        <Input className="col-span-3" placeholder="Title" />
        <Textarea className="col-span-3" placeholder="Description" />
        <Input type="file" className="col-span-3" placeholder="Attachment" />
      </div>
    </div>
  );
};
