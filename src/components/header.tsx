"use client";
import { Input } from "@/components/ui/input";
import ConnectWallet from "./connect-wallet";

export function Header() {
  return (
    <div className="flex items-center gap-4 justify-between border-b p-2">
      <Input placeholder="Type a command or search..." className="w-80" />
      <ConnectWallet />
    </div>
  );
}
