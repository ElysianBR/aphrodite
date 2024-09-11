import { useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

interface EthereumProvider {
  request: (args: { method: string }) => Promise<any>;
}

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

const MetaMaskConnect: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    const initMetaMask = async () => {
      const provider = (await detectEthereumProvider()) as EthereumProvider | null;
      if (provider) {
        console.log('MetaMask provider detected');
      } else {
        console.error('MetaMask is not installed');
      }
    };
    initMetaMask();
  }, []);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } else {
        console.error('MetaMask is not installed');
      }
    } catch (error) {
      console.error('Connection error:', error);
    }
  };

  return (
    <div>
      <h1>MetaMask Connection</h1>
      {account ? (
        <p>Connected account: {account}</p>
      ) : (
        <button onClick={connectWallet}>Connect MetaMask</button>
      )}
    </div>
  );
};

export default MetaMaskConnect;