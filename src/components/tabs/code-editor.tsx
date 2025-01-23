"use client";
import { WorkspaceTabModel } from "@/models/workspace-tabs.mode";
import { RootState } from "@/store/store";
import Editor from "@monaco-editor/react";
import { useSelector } from "react-redux";

export function CodeEditor() {
  const tabs = useSelector((state: RootState) => state.workspaceTabs);

  return (
    <>
      {tabs.map((tab: WorkspaceTabModel) => (
        <Editor
          key={`view-${tab.type}-${tab.label}-${tab.key}`}
          height="100%"
          defaultLanguage="html"
          defaultValue={tab.content}
        />
      ))}
    </>
  );
}
