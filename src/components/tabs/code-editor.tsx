import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

export function CodeEditor() {
  return (
    <Editor
      height="90vh"
      defaultLanguage="html"
      defaultValue="// some comment"
    />
  );
}
