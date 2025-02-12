"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NodeData } from "react-folder-tree";
import { SampleFileTreeData } from "@/defaults/sample-files.data";
import "react-folder-tree/dist/style.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { getFilesRecursive } from "@/services/file.service";

const FolderTree = dynamic(() => import("react-folder-tree"), { ssr: false });

export default function FileExplorer() {
  interface TreeEventProps {
    defaultOnClick: () => void;
    nodeData: NodeData;
  }

  const [treeData, setTreeData] = useState<NodeData | null>(null);

  useEffect(() => {
    getFilesRecursive()
      .then((data: NodeData | null) => {
        if (data) {
          setTreeData(data);
        }
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  const handleTreeNodeClick = ({
    defaultOnClick,
    nodeData,
  }: TreeEventProps) => {
    defaultOnClick();
    console.log(nodeData);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="p-2 flex flex-col gap-2">
        <h1 className="font-bold uppercase">File Explorer</h1>
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
      </div>
      <ScrollArea className="flex-1 w-full">
        <div className="p-2 text-sm">
          {treeData && (
            <FolderTree
              data={treeData}
              showCheckbox={false}
              readOnly
              onNameClick={handleTreeNodeClick}
            />
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
