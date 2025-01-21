import { CodeEditor } from "./code-editor";
import { TabItem } from "./tab-item";

export function TabContainer() {
  return (
    <div className="flex flex-col">
      <div className="flex border-b bg-sidebar">
        <TabItem active>File 1</TabItem>
        <TabItem>File 2</TabItem>
        <TabItem>File 3</TabItem>
        <TabItem>File 4</TabItem>
      </div>
      <div className="flex-1 p-2">
        <CodeEditor />
      </div>
    </div>
  );
}
