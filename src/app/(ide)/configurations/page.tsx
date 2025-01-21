"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";

export default function Configurations() {
  return (
    <Sidebar className="pl-12">
      <SidebarHeader>Configurations</SidebarHeader>
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
