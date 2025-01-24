"use client";
import { RootState } from "@/store/store";
import Editor from "@monaco-editor/react";
import { useSelector } from "react-redux";

export function CodeEditor() {
  const tabs = useSelector((state: RootState) => state.workspaceTabs);

  return (
    <>
      <Editor
        height="100%"
        defaultLanguage="html"
        value={tabs.active.content}
      />
    </>
  );
}
