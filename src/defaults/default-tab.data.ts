import { WorkspaceTabModel } from "@/models/workspace-tabs.model";

export const defaultTab: WorkspaceTabModel[] = [
  {
    key: "new",
    label: "New File",
    is_new: false,
    type: "file",
    content: "Welcome to Blurr",
  },
  {
    key: "other",
    label: "Other File",
    is_new: false,
    type: "file",
    content: "Welcome to Blurr 2",
  },
];
