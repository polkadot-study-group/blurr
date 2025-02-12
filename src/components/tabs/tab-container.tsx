"use client";
import { useDispatch, useSelector } from "react-redux";
import { CodeEditor } from "./code-editor";
import { TabItem } from "./tab-item";
import { RootState } from "@/store/store";
import { WorkspaceTabModel } from "@/models/workspace-tabs.model";
import { removeTab, setActive } from "@/store/workspace-tab";

export function TabContainer() {
  const tabs = useSelector((state: RootState) => state.workspaceTabs);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col flex-1">
      <div className="flex border-b bg-sidebar h-8 items-center">
        {tabs.value.map((tab: WorkspaceTabModel, indx: number) => (
          <TabItem
            onClick={() => dispatch(setActive(tab))}
            onClickRemove={() => dispatch(removeTab(indx))}
            key={`tab-${tab.type}-${tab.label}-${tab.key}`}
            active={tabs.active.key == tab.key}
          >
            {tab.label}
          </TabItem>
        ))}
      </div>
      <div className="flex-1">
        <CodeEditor />
      </div>
    </div>
  );
}
