import { SideBarIconMenu } from "@/defaults/navigation.data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SidebarIcons() {
  return (
    <div className="fixed top-0 h-full left-0 w-12 z-20 border-r flex flex-col">
      <ul className="flex flex-col items-center">
        {SideBarIconMenu.map((item, nav_key) => (
          <li key={`icon-nav-${nav_key}`}>
            <a href="#" className="block p-2">
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
