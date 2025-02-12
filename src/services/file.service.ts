import { APIPromise } from "@/models/api.model";
const token: string = "";

export async function getFilesRecursive(): Promise<APIPromise | null> {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/bounties", {
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
    console.error("Error fetching directories:", err || "Something went wrong");
    return null;
  }
}
