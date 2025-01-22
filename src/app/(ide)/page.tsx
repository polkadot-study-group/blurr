"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NodeData } from "react-folder-tree";
import { SampleFileTreeData } from "@/defaults/sample-files.data";
import "react-folder-tree/dist/style.css";
import dynamic from "next/dynamic";

const FolderTree = dynamic(() => import("react-folder-tree"), { ssr: false });

export default function Home() {
  interface TreeEventProps {
    defaultOnClick: () => void;
    nodeData: NodeData;
  }

  const handleTreeNodeClick = ({
    defaultOnClick,
    nodeData,
  }: TreeEventProps) => {
    defaultOnClick();
    console.log(nodeData);
  };

  return (
    <Sidebar className="pl-12">
      <SidebarHeader>
        File Explorer
        <div className="w-full">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Default Workspace" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Default Workspace">
                Default Workspace
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <FolderTree
              data={SampleFileTreeData}
              showCheckbox={false}
              readOnly
              onNameClick={handleTreeNodeClick}
            />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
