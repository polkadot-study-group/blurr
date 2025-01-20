import { FilesIcon, SearchIcon, SettingsIcon } from "lucide-react";

export function SidebarIcons() {
  return (
    <div className="fixed top-0 h-full left-0 w-12 z-20 border-r">
      <ul className="flex flex-col items-center">
        <li>
          <a href="#" className="block p-2">
            <FilesIcon className="size-8" />
          </a>
        </li>
        <li>
          <a href="#" className="block p-2">
            <SearchIcon className="size-8" />
          </a>
        </li>
        <li>
          <a href="#" className="block p-2">
            <SettingsIcon className="size-8" />
          </a>
        </li>
      </ul>
    </div>
  );
}
