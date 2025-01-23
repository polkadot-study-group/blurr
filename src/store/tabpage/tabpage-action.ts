import { Navigation } from "@/defaults/navigation.data";

export const changeActivePageTab = (page: Navigation) => {
  return {
    type: "INIT_PAGE",
    payload: page,
  };
};
