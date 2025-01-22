"use client";

import metamaskSDK from "@web3-onboard/metamask";
import { init, useConnectWallet } from "@web3-onboard/react";
import { Button } from "./ui/button";

const chains = [
  {
    id: "0x1",
    token: "ETH",
    label: "Ethereum Mainnet",
    rpcUrl: `https://rpc.ankr.com/eth`,
  },
  {
    id: "0xa",
    token: "ETH",
    label: "Optimism",
    rpcUrl: "https://rpc.ankr.com/optimism",
  },
  {
    id: "0x2105",
    token: "ETH",
    label: "Base",
    rpcUrl: "https://mainnet.base.org",
  },
  {
    id: "0xa4b1",
    token: "ETH",
    label: "Arbitrum One",
    rpcUrl: "https://arb1.arbitrum.io/rpc",
  },
  {
    id: "0xfa",
    token: "FTM",
    label: "Fantom",
    rpcUrl: "https://rpc.fantom.network",
  },
  {
    id: "0x38",
    token: "BNB",
    label: "Binance Smart Chain",
    rpcUrl: `https://bsc-dataseed.binance.org`,
  },
  {
    id: "0x89",
    token: "MATIC",
    label: "Matic Mainnet",
    rpcUrl: "https://matic-mainnet.chainstacklabs.com",
  },
  {
    id: "0xa86a",
    token: "AVAX",
    label: "Avalanche Mainnet",
    rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
  },
  {
    id: "0xa4ec",
    token: "CELO",
    label: "Celo Mainnet",
    rpcUrl: "https://rpc.ankr.com/celo",
  },
  {
    id: "0x64",
    token: "XDAI",
    label: "Gnosis Chain",
    rpcUrl: "https://rpc.gnosischain.com/",
  },
  {
    id: "0x44d",
    token: "ETH",
    label: "Polygon zkEVM",
    rpcUrl: "https://zkevm-rpc.com",
  },
  {
    id: "0xe708",
    token: "ETH",
    label: "Linea",
    rpcUrl: "https://linea.drpc.org",
  },
  {
    id: "0x1388",
    token: "MNT",
    label: "Mantle",
    rpcUrl: "https://rpc.mantle.xyz",
  },
];

// initialize the module with options
const metamaskSDKWallet = metamaskSDK({
  options: {
    extensionOnly: false,
    logging: {
      developerMode: true,
    },
    dappMetadata: {
      name: "Demo Web3Onboard",
    },
  },
});

init({
  // ... other Onboard options
  wallets: [
    metamaskSDKWallet,
    //... other wallets
  ],
  chains,
});

function ConnectWallet() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  return (
    // <div>
    //   <div>accounts: {JSON.stringify(wallet?.accounts)}</div>
    <Button
      disabled={connecting}
      onClick={() => (wallet ? disconnect(wallet) : connect())}
    >
      {connecting ? "connecting" : wallet ? "Disconnect" : "Connect Wallet"}
    </Button>
    //   <Button title="test sign" onClick={handleTestSign}>
    //     Test Sign
    //   </Button>
    //   <div>
    //     <Button
    //       title="Add Polygon"
    //       id={"addPolygonButton"}
    //       onClick={() => switchChain("0x89")}
    //     >
    //       Switch to Polygon
    //     </Button>
    //     <div id={"confirmation"}>
    //       <p>MetaMask doesn't have Polygon, do you want to add it?</p>
    //       <Button
    //         title="Add Polygon"
    //         id={"addPolygonButtonConfirmation"}
    //         onClick={addEthereumChain}
    //       >
    //         Add Polygon
    //       </Button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ConnectWallet;
