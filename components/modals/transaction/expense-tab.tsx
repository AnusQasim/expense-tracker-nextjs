import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronsUpDownIcon, SandwichIcon } from "lucide-react";

export const ExpenseTab = () => {
  return (
    <>
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
    </>
  );
};
