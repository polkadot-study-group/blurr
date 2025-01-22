"use client";

import "./../globals.css";
import { Workspace } from "@/components/workspace";
import { Toaster } from "@/components/ui/toaster";
import { MainSidebar } from "@/components/sidebar/main-sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body>
        <div className="flex h-screen w-screen">
          <MainSidebar />
          <main className="flex-1 pl-80">
            <Workspace />
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
