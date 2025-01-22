"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import "react-folder-tree/dist/style.css";

export default function Search() {
  return (
    <div className="flex flex-col h-screen">
      <div className="p-2 flex flex-col gap-2">
        <h1 className="font-bold uppercase">Search</h1>
        <div className="w-full">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Default Workspace" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Default Workspace">
                Default Workspace
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <ScrollArea className="flex-1 w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
        consequuntur illo nihil est accusantium fugit veritatis optio officia
        provident. Perferendis dolor rem veniam at accusamus sit eos ipsam
        inventore recusandae.
      </ScrollArea>
    </div>
  );
}
