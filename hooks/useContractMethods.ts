import { useEffect, useRef } from "react";
import { useWallet } from "use-wallet";
import Web3 from "web3";
import myToken from "../artifacts/contracts/MyToken.sol/MyToken.json";

const price = 2e17;

const useWeb3 = () => {
  const web3: any = useRef();
  const contract: any = useRef();

  useEffect(() => {
    web3.current = new Web3(window.ethereum);
    contract.current = new web3.current.eth.Contract(
      myToken.abi,
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
    );
  });
  return [contract];
};

export const useContractMethods = () => {
  const [contract] = useWeb3();
  const wallet = useWallet();

  const claim = async () => {
    return contract.current.methods
      .claim()
      .send({ from: wallet?.account as string, value: price });
  };

  const getUserTokens = async () => {
    const tokens = [];
    let index = 0;
    const owner = wallet?.account as string;
    const balance = await contract.current.methods.balanceOf(owner).call();
    for (let i = 0; i < balance; i++) {
      const token = await contract.current.methods
        .tokenOfOwnerByIndex(owner, index)
        .call();
      tokens.push(token);
      index++;
    }
    return tokens;
  };

  return { claim, getUserTokens };
};
