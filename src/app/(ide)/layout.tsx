"use client";

import "./../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { FilesSidebar } from "@/components/sidebar_contents/files-sidebar";
import { SidebarIcons } from "@/components/sidebar-icons";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarContent, setSidebarContent] = useState<React.ReactNode>(
    <FilesSidebar />
  );
  return (
    <html lang="en">
      <body>
        <SidebarIcons />
        <SidebarProvider className="w-full">
          {sidebarContent}
          <main className="flex-1">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
