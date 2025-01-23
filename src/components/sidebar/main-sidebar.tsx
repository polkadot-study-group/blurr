import { SidebarContent } from "./sidebar-content";
import FileExplorer from "./sidebar-contents/file-explorer";
import { SidebarIcons } from "./sidebar-icons";

export function MainSidebar() {
  return (
    <div className="fixed top-0 left-0 w-80 h-screen overflow-hidden flex">
      <SidebarIcons />
      <SidebarContent />
    </div>
  );
}
