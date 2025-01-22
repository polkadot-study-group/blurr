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
    if ((window as any).ethereum) {
      const result: string[] = await (window as any).ethereum.request({
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
    if (!(window as any).ethereum) {
      return {
        status: "error",
        message: "Install Metamask",
      };
    }

    const balance: string = await (window as any).ethereum.request({
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
