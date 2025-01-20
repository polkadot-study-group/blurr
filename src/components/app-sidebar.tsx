import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar className="pl-12">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui tempore
        optio aperiam deleniti blanditiis cumque saepe expedita mollitia eveniet
        quas distinctio, velit beatae eaque facilis excepturi in debitis nostrum
        possimus.
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
