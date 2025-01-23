import { defaultTab } from "@/defaults/default-tab.data";
import { WorkspaceTabModel } from "@/models/workspace-tabs.mode";

const initialTabs: WorkspaceTabModel[] = defaultTab;

export default (
  state = initialTabs,
  { type, payload }: { type: string; payload: WorkspaceTabModel[] }
): WorkspaceTabModel[] => {
  switch (type) {
    case "INIT_TABS":
      return payload;
  }
  return state;
};
