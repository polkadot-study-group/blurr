import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Terminal } from "./terminal";
import { Header } from "./header";

export function Workspace() {
  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>
        <div>
          <Header />
          <div className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ad
            blanditiis nostrum cupiditate, omnis possimus iste ea facere quod
            odit pariatur nihil voluptatibus, aspernatur maiores velit? Maxime
            inventore ad minus.
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="bg-sidebar" defaultSize={30}>
        <Terminal />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
