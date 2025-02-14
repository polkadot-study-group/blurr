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
import "react-folder-tree/dist/style.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { getFilesRecursive } from "@/services/file.service";
import { SampleFileTreeData } from "@/defaults/sample-files.data";
import {
  Delete,
  Edit,
  File,
  Folder,
  FolderOpen,
  Home,
  PlusIcon,
  TrashIcon,
  X,
} from "lucide-react";

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

  const FolderIcon = ({ defaultOnClick, nodeData }: TreeEventProps) => {
    const { path, name, checked, isOpen, ...restData } = nodeData;
    const handleClick = () => {
      defaultOnClick();
    };

    return <Folder className="size-4" onClick={handleClick} />;
  };

  const FolderOpenIcon = ({ defaultOnClick, nodeData }: TreeEventProps) => {
    const { path, name, checked, isOpen, ...restData } = nodeData;
    const handleClick = () => {
      // doSthBad({ path, name, checked, isOpen, ...restData });
      defaultOnClick();
    };

    return <FolderOpen className="size-4" onClick={handleClick} />;
  };

  const FileIcon = ({ defaultOnClick, nodeData }: TreeEventProps) => {
    const { path, name, checked, isOpen, ...restData } = nodeData;
    const handleClick = () => {
      defaultOnClick();
    };

    return <File className="size-4" onClick={handleClick} />;
  };

  // const EditIcon = ({ defaultOnClick, nodeData }: TreeEventProps) => {
  //   const { path, name, checked, isOpen, ...restData } = nodeData;
  //   const handleClick = () => {
  //     doSthBad({ path, name, checked, isOpen, ...restData });
  //     defaultOnClick();
  //     alert("edit icon clicked");
  //   };

  //   return <Edit className="size-4" onClick={handleClick} />;
  // };

  const DeleteIcon = ({ defaultOnClick, nodeData }: TreeEventProps) => {
    const { path, name, checked, isOpen, ...restData } = nodeData;
    const handleClick = () => {
      alert("delete icon clicked");
      defaultOnClick();
    };

    return <TrashIcon className="size-4" onClick={handleClick} />;
  };

  const CancelIcon = ({ defaultOnClick, nodeData }: TreeEventProps) => {
    const { path, name, checked, isOpen, ...restData } = nodeData;
    const handleClick = () => {
      alert("Cancel icon clicked");
      defaultOnClick();
    };

    return <X className="size-4" onClick={handleClick} />;
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
              onNameClick={handleTreeNodeClick}
              iconComponents={{
                FolderOpenIcon,
                FolderIcon,
                FileIcon,
                // CancelIcon,
                // DeleteIcon,
                // EditIcon
                /* other custom icons ... */
              }}
            />
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
