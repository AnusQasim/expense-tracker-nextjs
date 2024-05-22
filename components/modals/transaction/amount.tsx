"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
  SandwichIcon,
} from "lucide-react";
import { useTransactionModal } from "@/hooks/use-transaction-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";

import axios from "axios";

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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await axios.post("/api/transaction", values);
      console.log(res);
    } catch (error) {}
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
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-3 gap-4"
        >
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Category"></SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="dining">Dining</SelectItem>
                    <SelectItem value="Petrol">Petrol</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input
                    placeholder="$0.00"
                    className="text-right"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>

          {/* //   <Input type="file" className="col-span-3" placeholder="Attachment" /> * */}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
