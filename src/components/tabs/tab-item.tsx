import { FileIcon, XIcon } from "lucide-react";
import React from "react";

interface TabItemProps {
  children: React.ReactNode; // Define the children prop
  active?: boolean;
  type?: "file" | "component";
}

export function TabItem({ children, active, type = "file" }: TabItemProps) {
  return (
    <div
      className={`flex items-center gap-2 border-r px-2 py-1 text-sm cursor-pointer group bg-muted ${
        active ? "opacity-100 font-bold" : "opacity-80"
      }`}
    >
      {type == "file" && <FileIcon className="size-3" />}
      {children}
      <a href="#">
        <XIcon
          className={`size-4 ${
            active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />
      </a>
    </div>
  );
}
