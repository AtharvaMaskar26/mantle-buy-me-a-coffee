import React, {useEffect, useState } from 'react'

// Importing Ethers 
import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";

// Importing Components
import TransactionCard from "./TransactionCard"

const Transactions = ({state}) => {
  const [memos, setMemos] = useState([]);
  const {contract} = state;
  useEffect(() => {
    const memoMessage = async() => {
      const memos = await contract.getMemos();
      setMemos(memos);
      console.log(memos);
    }

    contract && memoMessage();

  }, [contract])

  return (
    <div className="memos border-2 mx-[40vh] px-4 py-4 my-[10vh] rounded-lg">
      <h1 className='font-semibold text-lg'>Recent Supporters</h1>
      {
        memos.map((memo) => {
          return (
              <TransactionCard
                name={memo.name}
                message={memo.message}
                date={new Date(memo.timestamp * 1000).toLocaleString}
                from={memo.from}
                amount={ethers.utils.formatEther(memo.amount)}
              />
          )
        })
      }
    </div>
  )
}

export default Transactions
