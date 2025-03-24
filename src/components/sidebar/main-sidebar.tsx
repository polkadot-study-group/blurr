import { SidebarContent } from "./sidebar-content";
import { SidebarIcons } from "./sidebar-icons";

export function MainSidebar() {
  return (
    <div className="fixed top-0 left-0 w-80 h-screen overflow-hidden flex z-10">
      <SidebarIcons />
      <SidebarContent />
    </div>
  );
}
