import { Navigation, SideBarIconMenu } from "@/defaults/navigation.data";

const initialPage: Navigation = SideBarIconMenu[0];

export default (
  state = initialPage,
  { type, payload }: { type: string; payload: Navigation }
): Navigation => {
  switch (type) {
    case "INIT_PAGE":
      return payload;
  }
  return state;
};
