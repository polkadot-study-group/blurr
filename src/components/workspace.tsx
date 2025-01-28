"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
// import TerminalComponent from "./terminal";
import { Header } from "./header";
import { TabContainer } from "./tabs/tab-container";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
const TerminalComponent = dynamic(() => import("./terminal"), { ssr: false });

export function Workspace() {
  const global = useSelector((state: RootState) => state.globalSettings);

  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>
        <div className="flex flex-col flex-1 h-full">
          <Header />
          <TabContainer />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      {global.showTerminal && (
        <ResizablePanel className="bg-sidebar" defaultSize={30}>
          <TerminalComponent />
        </ResizablePanel>
      )}
    </ResizablePanelGroup>
  );
}
