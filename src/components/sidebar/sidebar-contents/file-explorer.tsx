"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NodeData } from "react-folder-tree";
import "react-folder-tree/dist/style.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { getFilesRecursive } from "@/services/file.service";
import { setTree } from "@/store/directory-tree";
import { File, Folder, FolderOpen, TrashIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useDispatch } from "react-redux";

const FolderTree = dynamic(() => import("react-folder-tree"), { ssr: false });

export default function FileExplorer() {
  interface TreeEventProps {
    defaultOnClick: () => void;
    nodeData: NodeData;
  }

  const dispatch = useDispatch();
  const tree = useSelector((state: RootState) => state.directoryTree);

  useEffect(() => {
    getFilesRecursive()
      .then((data: NodeData | null) => {
        if (data) {
          dispatch(setTree(data));
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
    console.log(path, name, checked, isOpen, restData);
    const handleClick = () => {
      defaultOnClick();
    };

    return <Folder className="size-4" onClick={handleClick} />;
  };

  const FolderOpenIcon = ({ defaultOnClick, nodeData }: TreeEventProps) => {
    const { path, name, checked, isOpen, ...restData } = nodeData;
    console.log(path, name, checked, isOpen, restData);
    const handleClick = () => {
      // doSthBad({ path, name, checked, isOpen, ...restData });
      defaultOnClick();
    };

    return <FolderOpen className="size-4" onClick={handleClick} />;
  };

  const FileIcon = ({ defaultOnClick, nodeData }: TreeEventProps) => {
    const { path, name, checked, isOpen, ...restData } = nodeData;
    console.log(path, name, checked, isOpen, restData);
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
    console.log(path, name, checked, isOpen, restData);
    // @ts-expect-error: acept any type for e args
    const handleClick = (e) => {
      console.log(e, nodeData);
      alert("delete icon clicked");
      defaultOnClick();
    };

    return <TrashIcon className="size-4" onClick={handleClick} />;
  };

  // const CancelIcon = ({ defaultOnClick, nodeData }: TreeEventProps) => {
  //   const { path, name, checked, isOpen, ...restData } = nodeData;
  //   console.log(path, name, checked, isOpen, restData);
  //   const handleClick = () => {
  //     alert("Cancel icon clicked");
  //     defaultOnClick();
  //   };

  //   return <X className="size-4" onClick={handleClick} />;
  // };

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
      <div className="flex-1 w-full overflow-auto">
        <div className="p-2 text-sm">
          {tree.data && (
            <FolderTree
              data={tree.data}
              showCheckbox={false}
              onNameClick={handleTreeNodeClick}
              iconComponents={{
                // @ts-expect-error: icon component props mismatch, works as intended
                FolderOpenIcon,
                // @ts-expect-error: icon component props mismatch, works as intended
                FolderIcon,
                // @ts-expect-error: icon component props mismatch, works as intended
                FileIcon,
                // CancelIcon,
                // @ts-expect-error: icon component props mismatch, works as intended
                DeleteIcon,
                // EditIcon
                /* other custom icons ... */
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
