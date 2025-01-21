import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <div className="flex items-center gap-4 justify-between border-b p-2">
      <Input placeholder="Type a command or search..." className="w-80" />
      <Button>Connect to Metamask</Button>
    </div>
  );
}
