import React from "react";
import logo_final from "../public/dinos/logo_final.png";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from 'web3';
import { ethers } from "ethers"
import Web3Modal from "web3modal"

async function connect() {
  let providerOptions;
		providerOptions = {
			metamask: {
			id: "injected",
			name: "MetaMask",
			type: "injected",
			check: "isMetaMask"
			},
			walletconnect: {
			package: WalletConnectProvider, // required
			options: {
				infuraId: "8c661edd6d764e1e95fd0318054d331c",
				rpc: {
					56: 'https://bsc-dataseed.binance.org/'
				},
				network: "binance", // --> this will be use to determine chain id 56
			}
			}
		};
        const web3Modal = new Web3Modal({
            network: "binance",
            cacheProvider: false,
            providerOptions
            })
		//web3Modal.clearCachedProvider()
        let connection = await web3Modal.connect()
		
        let provider = new ethers.providers.Web3Provider(connection)
		
        let netId = await provider.getNetwork()
  
}
const Header = () => {
  return (
    <header className="text-white fixed top-0 right-0 w-full p-4 z-10 bg-indigo-700 bg-opacity-80 flex justify-between font-bangers lg:py-6 lg:px-10">
      <h1 className="text-3xl">
        <a href="#">
        <img
              src="dinos/logo_final.png"
              width={80}
              height={20}
            /> 
        </a>
      </h1>
      <ul className="flex gap-8 text-xl">
        <li className="nav-list-item">
          <a href="#roadmap">ROADMAP</a>
        </li>
        <li className="nav-list-item">
          <a href="#team">TEAM</a>
        </li>
        <li className="nav-list-item">
          <a href="#connect" onClick={connect}>Connect Wallet</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
