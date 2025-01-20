import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function SearchSidebar() {
  return (
    <Sidebar className="pl-12">
      <SidebarHeader>File Explorer</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspaces</SidebarGroupLabel>
          <div className="w-full">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus quod sit sequi dolorum ipsam ducimus! Nulla vitae
              explicabo vero ut, voluptatem vel cupiditate velit quam
              voluptates, eaque aspernatur necessitatibus quae!
            </p>
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
