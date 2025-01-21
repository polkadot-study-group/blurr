import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Terminal } from "./terminal";
import { Header } from "./header";
import { TabContainer } from "./tabs/tab-container";

export function Workspace() {
  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>
        <div>
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
