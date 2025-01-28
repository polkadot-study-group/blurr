"use client";

import { RootState } from "@/store/store";
import Editor from "@monaco-editor/react";
import { useSelector } from "react-redux";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function CodeEditor() {
  const tabs = useSelector((state: RootState) => state.workspaceTabs);
  const { theme, systemTheme } = useTheme();
  const [currTheme, setCurrTheme] = useState("vs-light");

  useEffect(() => {
    let selectedTheme = "vs-light";
    if (theme === "system") {
      selectedTheme = systemTheme === "dark" ? "vs-dark" : "vs-light";
    } else if (theme === "dark") {
      selectedTheme = "vs-dark";
    }
    setCurrTheme(selectedTheme);
  }, [theme, systemTheme]);

  return (
    <Editor
      height="100%"
      defaultLanguage="html"
      value={tabs.active.content}
      theme={currTheme}
      onMount={(editor, monaco) => {
        monaco.editor.setTheme(currTheme); // Apply theme on mount
      }}
    />
  );
}
