import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export function Workspace() {
  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>
        <div className="p-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ad
            blanditiis nostrum cupiditate, omnis possimus iste ea facere quod
            odit pariatur nihil voluptatibus, aspernatur maiores velit? Maxime
            inventore ad minus.
          </p>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="bg-sidebar"></ResizablePanel>
    </ResizablePanelGroup>
  );
}
