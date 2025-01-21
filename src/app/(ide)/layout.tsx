"use client";

import "./../globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarIcons } from "@/components/sidebar-icons";
import { Workspace } from "@/components/workspace";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarIcons />
        <SidebarProvider className="w-full">
          {children}

          <main className="flex-1">
            {/* <div className="flex justify-end">
              <SidebarTrigger />
            </div> */}
            <Workspace />
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
