"use client";

import { RootState } from "@/store/store";
import Editor, { useMonaco } from "@monaco-editor/react";
import { useSelector } from "react-redux";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function CodeEditor() {
  const tabs = useSelector((state: RootState) => state.workspaceTabs);
  const { theme, systemTheme } = useTheme();
  const [currTheme, setCurrTheme] = useState("vs-light");
  const monaco = useMonaco();

  useEffect(() => {
    let selectedTheme = "vs-light";
    if (theme === "system") {
      if (systemTheme === "dark") {
        selectedTheme = "vs-dark";
      }
    } else if (theme === "dark") {
      selectedTheme = "vs-dark";
    }
    setCurrTheme(selectedTheme);
    monaco?.editor.setTheme(selectedTheme);
  }, [theme, systemTheme, monaco]);

  return (
    <Editor
      height="100%"
      defaultLanguage="sol"
      value={tabs.active.content}
      theme={currTheme}
    />
  );
}
