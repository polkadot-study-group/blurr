"use client";
import { Navigation, SideBarIconMenu } from "@/defaults/navigation.data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { changeActivePageTab } from "@/store/tabpage/tabpage-action";

export function SidebarIcons() {
  const dispatch = useDispatch();
  const currentTabPage = useSelector(
    (state: RootState) => state.currentTabPage
  );

  const handleChangeTab = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: Navigation
  ) => {
    dispatch(changeActivePageTab(item));
  };

  return (
    <div className="w-12 z-20 h-full border-r flex flex-col bg-muted">
      <ul className="flex flex-col items-center">
        {SideBarIconMenu.map((item, nav_key) => (
          <li key={`icon-nav-${nav_key}`} className="w-full">
            <a
              href="#"
              className={`flex items-center justify-center p-2 w-full relative ${
                currentTabPage.key == item.key && "bg-accent"
              }`}
              onClick={(e) => handleChangeTab(e, item)}
            >
              {currentTabPage.key == item.key && (
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
