"use client";
import { SideBarIconMenu } from "@/defaults/navigation.data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export function SidebarIcons() {
  const pathname = usePathname();

  return (
    <div className="w-12 z-20 h-full border-r flex flex-col bg-muted">
      <ul className="flex flex-col items-center">
        {SideBarIconMenu.map((item, nav_key) => (
          <li key={`icon-nav-${nav_key}`} className="w-full">
            <a
              href="#"
              className={`flex items-center justify-center p-2 w-full relative ${
                pathname == item.url && "bg-accent"
              }`}
            >
              {pathname == item.url && (
                <div className="absolute top-0 left-0 w-[3px] bg-primary h-full"></div>
              )}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <item.icon className="size-6" />
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
