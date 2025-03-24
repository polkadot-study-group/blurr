import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export function SidebarContent() {
  const currentTabPage = useSelector(
    (state: RootState) => state.currentTabPage
  );
  return (
    <div className="h-screen flex-1 bg-sidebar border-r w-full">
      <currentTabPage.content />
    </div>
  );
}
