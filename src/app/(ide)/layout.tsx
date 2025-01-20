"use client";

import "./../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { FilesSidebar } from "@/components/sidebar_contents/files-sidebar";
import { SidebarIcons } from "@/components/sidebar-icons";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import path from "path";
import { SearchSidebar } from "@/components/sidebar_contents/search-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarContent, setSidebarContent] = useState<React.ReactNode>(
    <FilesSidebar />
  );

  const pathname = usePathname();
  useEffect(() => {
    if (pathname == "/") {
      setSidebarContent(<FilesSidebar />);
    }
    if (pathname == "/search") {
      setSidebarContent(<SearchSidebar />);
    }
  }, [pathname]);

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
