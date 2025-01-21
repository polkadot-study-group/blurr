import { NodeData } from "react-folder-tree";

// FROM DOCUMENTATION
// https://www.npmjs.com/package/react-folder-tree
// {
//   // reserved keys, can customize initial value
//   name: 'root node',
//   checked (optional): 0 (unchecked, default) | 0.5 (half checked) | 1(checked),
//   isOpen (optional): true (default) | false,
//   children (optional): [array of treenode],

//   // internal keys (auto generated), plz don't include them in the initial data
//   path: [],    // path is an array of indexes to this node from root node
//   _id: 0,

//   // not reserved, can carry any extra info about this node
//   nickname (optional): 'pikachu',
//   url (optional): 'url of this node',
// }

export const SampleFileTreeData: NodeData = {
  name: "blur_UI",
  isOpen: true,
  children: [
    {
      name: ".next",
      isOpen: false,
      children: [],
      type: "directory",
      content: "",
      created_at: "",
    },
    {
      name: "node_modules",
      isOpen: true,
      children: [],
      type: "directory",
      content: "",
      created_at: "",
    },
    {
      name: "public",
      isOpen: true,
      children: [
        {
          name: "file.svg",
          type: "file",
          content: "",
          created_at: "",
        },
        {
          name: "globe.svg",
          type: "file",
          content: "",
          created_at: "",
        },
        {
          name: "next.svg",
          type: "file",
          content: "",
          created_at: "",
        },
        {
          name: "vercel.svg",
          type: "file",
          content: "",
          created_at: "",
        },
        {
          name: "window.svg",
          type: "file",
          content: "",
          created_at: "",
        },
      ],
      type: "directory",
      content: "",
      created_at: "",
    },
    {
      name: "src",
      isOpen: true,
      children: [
        {
          name: "app",
          isOpen: true,
          children: [],
          type: "file",
          content: "directory",
          created_at: "",
        },
        {
          name: "components",
          isOpen: true,
          children: [],
          type: "file",
          content: "directory",
          created_at: "",
        },
        {
          name: "defaults",
          isOpen: true,
          children: [],
          type: "file",
          content: "directory",
          created_at: "",
        },
        {
          name: "lib",
          isOpen: true,
          children: [],
          type: "file",
          content: "directory",
          created_at: "",
        },
        {
          name: "models",
          isOpen: true,
          children: [],
          type: "file",
          content: "directory",
          created_at: "",
        },
      ],
      type: "directory",
      content: "",
      created_at: "",
    },
    {
      name: ".gitignore",
      type: "file",
      content: "",
      created_at: "",
    },
    {
      name: "components.json",
      type: "file",
      content: "",
      created_at: "",
    },
    {
      name: "eslint.config.mjs",
      type: "file",
      content: "",
      created_at: "",
    },
    {
      name: "next.env.d.ts",
      type: "file",
      content: "",
      created_at: "",
    },
    {
      name: "next.config.ts",
      type: "file",
      content: "",
      created_at: "",
    },
    {
      name: "package-lock.json",
      type: "file",
      content: "",
      created_at: "",
    },
    {
      name: "package.json",
      type: "file",
      content: "",
      created_at: "",
    },
    {
      name: "postcss.config.mjs",
      type: "file",
      content: "",
      created_at: "",
    },
    {
      name: "README.md",
      type: "file",
      content: "",
      created_at: "",
    },
    {
      name: "tailwind.config.ts",
      type: "file",
      content: "",
      created_at: "",
    },
    {
      name: "tsconfig.json",
      type: "file",
      content: "",
      created_at: "",
    },
  ],
  type: "directory",
  content: "",
  created_at: "",
};
