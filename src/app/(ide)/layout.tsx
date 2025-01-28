"use client";

import "./../globals.css";
import { Workspace } from "@/components/workspace";
import { Toaster } from "@/components/ui/toaster";
import { MainSidebar } from "@/components/sidebar/main-sidebar";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout() {
  return (
    <html lang="en-US">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Provider store={store}>
            <div className="flex h-screen w-screen">
              <MainSidebar />
              <main className="flex-1 pl-80">
                <Workspace />
              </main>
            </div>
            <Toaster />
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
