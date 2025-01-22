export function SidebarContent({ children }: { children: React.ReactNode }) {
  return <div className="h-screen flex-1 bg-sidebar border-r">{children}</div>;
}
