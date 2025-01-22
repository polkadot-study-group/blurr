// base from https://www.youtube.com/watch?v=uWeK30vg35c

declare global {
  interface Window {
    ethereum?: {
      request: <T = unknown>(args: {
        method: string;
        params?: unknown[];
      }) => Promise<T>;
    };
  }
}

type status_enum = "success" | "error";

export interface WalletAPIRequestAccountsResult {
  status: status_enum;
  message: string;
  data?: string[];
}

export interface WalletAPIUserBalance {
  status: status_enum;
  message: string;
  data?: string;
}

export class Wallet {
  async requestAccounts(): Promise<WalletAPIRequestAccountsResult> {
    if (window.ethereum) {
      const result: string[] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      return {
        status: "success",
        message: "Success",
        data: result,
      };
    } else {
      return {
        status: "error",
        message: "Install Metamask",
      };
    }
  }

  async getUserBalance(address: string): Promise<WalletAPIUserBalance> {
    if (!window.ethereum) {
      return {
        status: "error",
        message: "Install Metamask",
      };
    }

    const balance: string = await window.ethereum.request({
      method: "eth_getBalance",
      params: [address, "latest"],
    });
    return {
      status: "success",
      message: "Success",
      data: balance,
    };
  }
}
