import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { FilesIcon, SearchIcon, SettingsIcon } from "lucide-react";

export interface Navigation {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  label: string;
  url: string;
}

export const SideBarIconMenu: Navigation[] = [
  {
    icon: FilesIcon,
    label: "Files",
    url: "",
  },
  {
    icon: SearchIcon,
    label: "Search",
    url: "",
  },
  {
    icon: SettingsIcon,
    label: "Configurations",
    url: "",
  },
];
