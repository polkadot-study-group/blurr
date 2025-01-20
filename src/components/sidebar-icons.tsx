import { SideBarIconMenu } from "@/defaults/navigation.data";

export function SidebarIcons() {
  return (
    <div className="fixed top-0 h-full left-0 w-12 z-20 border-r flex flex-col">
      <ul className="flex flex-col items-center">
        {SideBarIconMenu.map((item, nav_key) => (
          <li key={`icon-nav-${nav_key}`}>
            <a href="#" className="block p-2">
              <item.icon className="size-8" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
