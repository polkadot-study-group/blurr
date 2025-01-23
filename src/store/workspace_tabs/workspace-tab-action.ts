import { WorkspaceTabModel } from "@/models/workspace-tabs.mode";

export const initWorkspaceTab = (tabs: WorkspaceTabModel[]) => {
  return {
    type: "INIT_TABS",
    payload: tabs,
  };
};
