"use client";

import "./../globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarIcons } from "@/components/sidebar-icons";
import { Workspace } from "@/components/workspace";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
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
        <Toaster />
      </body>
    </html>
  );
}
