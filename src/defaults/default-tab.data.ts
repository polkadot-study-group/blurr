import { WorkspaceTabModel } from "@/models/workspace-tabs.mode";

export const defaultTab: WorkspaceTabModel[] = [
  {
    key: "new",
    label: "New File",
    is_new: false,
    type: "file",
    content: "Welcome to Blurr",
  },
];
