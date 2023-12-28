import { useState } from 'react'
import { useEffect } from 'react'
  // Import everything needed to use the `useQuery` hook
  import { useQuery, gql } from "@apollo/client";

// Importing Ethers 
import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";

import './App.css'

// Importing Components
import Navbar from './Components/Navbar';
import Profile from './Components/Profile'
import Buy from './Components/Buy';
import Transactions from './Components/Transactions'

// Importing Contract ABI
// Change the path according to your ABI path
import ABI from '../../smart-contracts/artifacts/contracts/Latte.sol/Latte.json'

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })
  const [accounts, setAccounts] = useState('');

  // Fetching Environment Variables 
  const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;
  useEffect(() => {
    const template = async () => {
      const contractAddress = CONTRACT_ADDRESS;
      const contractABI = ABI.abi;

      try {
        const { ethereum } = window;

        const account = await ethereum.request({ method: 'eth_requestAccounts' });
        setAccounts(account[0]);

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        })

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner();

        // Creating Contract Instance 
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
          );

          console.log(contract);

          setState({ provider, signer, contract })
        } catch (err) {
          console.error(err);
        }
      }

      template();
    }, [])



    const GET_ACCOUNT_DATA = gql`
    query Profiles {
      profiles {
        name
        profilePicture {
          url
        }
        profileBanner {
          url
        }
        about {
          html
        }
        description
      }
    }
    `;

    const { loading, error, data } = useQuery(GET_ACCOUNT_DATA);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    console.log(data);
  return (
    <div className="App">
      <Navbar
        account={accounts}
      />
      <Profile
        data={data}
      />
      <div >

        <Buy 
          state={state}
          about={data.profiles[0].about.html} />
        <Transactions state={state} />

      </div>
    </div>
  )
}

export default App
