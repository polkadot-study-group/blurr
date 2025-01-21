"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
// import { Terminal } from "./terminal";
import { Header } from "./header";
import { TabContainer } from "./tabs/tab-container";
import dynamic from "next/dynamic";

const Terminal = dynamic(() => import("./terminal"), { ssr: false });

export function Workspace() {
  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>
        <div className="flex flex-col flex-1 h-full">
          <Header />
          <TabContainer />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="bg-sidebar" defaultSize={30}>
        <Terminal />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
