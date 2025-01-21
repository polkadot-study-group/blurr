"use client";

import "./../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarIcons } from "@/components/sidebar-icons";

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

          <main className="flex-1 p-4">
            {/* <div className="flex justify-end">
              <SidebarTrigger />
            </div> */}
            <h1>Hello World</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque esse, distinctio vero sapiente perspiciatis laborum
              velit obcaecati sed repudiandae ratione, culpa omnis fugit! Porro
              omnis saepe sit a eos corrupti.
            </p>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
