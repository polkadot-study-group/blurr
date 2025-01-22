import { useState } from "react";
import { Button } from "./ui/button";
import {
  Wallet,
  WalletAPIRequestAccountsResult,
  WalletAPIUserBalance,
} from "@/services/wallet-api";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function ConnectWallet2() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [defaultAccount, setDefaultAccount] = useState<string | null>(null);
  const [userBalance, setUserBalance] = useState<string | null>(null);
  const [connectionButtonText, setConnectionButtonText] =
    useState("Connect Wallet");

  const wallet = new Wallet();

  const connectWalletHandler = async () => {
    const accounts: WalletAPIRequestAccountsResult =
      await wallet.requestAccounts();

    if (accounts.status == "success" && accounts.data) {
      console.log(accounts);
      accountChangeHandler(accounts.data[0]);
    } else {
      setErrorMessage(accounts.message);
    }
  };

  const accountChangeHandler = (newAccount: string) => {
    console.log("newAccount", newAccount);
    setDefaultAccount(newAccount);
    getUserBalance(newAccount);
  };

  const getUserBalance = (address: string) => {
    wallet.getUserBalance(address).then((result: WalletAPIUserBalance) => {
      if (result.status == "success" && result.data) {
        console.log("balance", result.data);
        setUserBalance(result.data);
      }
    });
  };

  return (
    <>
      {!defaultAccount ? (
        <Button onClick={connectWalletHandler}>Connect Wallet</Button>
      ) : (
        <Popover>
          <PopoverTrigger>
            <span className="bg-primary text-accent border rounded-lg p-2">
              {defaultAccount}
            </span>
          </PopoverTrigger>
          <PopoverContent className="min-w-[400px]">
            <div className="bg-muted rounded-lg mb-2 p-2">
              <span className="text-xs">Address:</span>
              <p>{defaultAccount}</p>
              <span className="text-xs">Balance:</span>
              <p>{userBalance}</p>
            </div>
            <Button className="w-full">Disconnect Wallet</Button>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
}
