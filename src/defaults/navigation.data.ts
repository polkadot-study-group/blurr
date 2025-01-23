import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { FilesIcon, SearchIcon, SettingsIcon } from "lucide-react";
import FileExplorer from "@/components/sidebar/sidebar-contents/file-explorer";
import Search from "@/components/sidebar/sidebar-contents/search";
import Configuration from "@/components/sidebar/sidebar-contents/configuration";

export interface Navigation {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  label: string;
  key: string;
  content: React.ElementType;
}

export const SideBarIconMenu: Navigation[] = [
  {
    icon: FilesIcon,
    label: "Files",
    key: "files",
    content: FileExplorer,
  },
  {
    icon: SearchIcon,
    label: "Search",
    key: "search",
    content: Search,
  },
  {
    icon: SettingsIcon,
    label: "Configurations",
    key: "cog",
    content: Configuration,
  },
];
