type TabType = "file" | "html";

export interface WorkspaceTabModel {
  key: string;
  label: string;
  is_new: boolean;
  type: TabType;
  content: string;
}
