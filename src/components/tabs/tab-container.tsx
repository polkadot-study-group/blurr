"use client";
import { useSelector } from "react-redux";
import { CodeEditor } from "./code-editor";
import { TabItem } from "./tab-item";
import { RootState } from "@/store/store";
import { WorkspaceTabModel } from "@/models/workspace-tabs.mode";

export function TabContainer() {
  const tabs = useSelector((state: RootState) => state.workspaceTabs);

  return (
    <div className="flex flex-col flex-1">
      <div className="flex border-b bg-sidebar h-8 items-center">
        {tabs.map((tab: WorkspaceTabModel) => (
          <TabItem key={`tab-${tab.type}-${tab.label}-${tab.key}`}>
            {tab.label}
          </TabItem>
        ))}
      </div>
      <div className="flex-1 p-2">
        <CodeEditor />
      </div>
    </div>
  );
}
