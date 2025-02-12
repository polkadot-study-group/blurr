import { NodeData } from "react-folder-tree";
const token: string = "";

const api_url = "https://blurr-api.staginglab.info";

export async function getFilesRecursive(): Promise<NodeData | null> {
  try {
    const res = await fetch(api_url + "/api/cli/directory/list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch directory listing");
      return null;
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(
      "Error while fetching directories:",
      err || "Something went wrong"
    );
    return null;
  }
}

export async function getFile(file: string): Promise<string | null> {
  try {
    const res = await fetch(api_url + "/api/cli/file/open/" + file, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch file");
      return null;
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error while fetching file:", err || "Something went wrong");
    return null;
  }
}
