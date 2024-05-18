"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { ExpenseTab } from "./expense-tab";
import { IncomeTab } from "./income-tab";

export const Amount = () => {
  return (
    <Tabs className="w-full" defaultValue="expense">
      <TabsList className="w-full">
        <TabsTrigger value="expense" className="w-full">
          <ChevronDownIcon className="w-4 h-4 mr-2" /> Expense
        </TabsTrigger>
        <TabsTrigger value="income" className="w-full">
          <ChevronUpIcon className="w-4 h-4 mr-2" /> Income
        </TabsTrigger>
      </TabsList>
      <TabsContent value="expense" className="w-full">
        <ExpenseTab />
      </TabsContent>
      <TabsContent value="income" className="w-full">
        <IncomeTab />
      </TabsContent>
    </Tabs>
  );
};
