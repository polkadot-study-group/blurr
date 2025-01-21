"use client";
import Editor from "@monaco-editor/react";

export function CodeEditor() {
  return (
    <Editor
      height="100%"
      defaultLanguage="html"
      defaultValue="// some comment"
    />
  );
}
