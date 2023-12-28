import React, { useState } from 'react'
import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js"
import ReactHtmlParser from 'html-react-parser';

const Buy = ({state, about}) => {
    const [userData, setUserData] = useState({
        name: "", 
        message: "",
        amount: ""
    })

    // Function that triggers the buyCoffee function from our smart contract
    const buyCoffee = async(event) => {
        event.preventDefault();
        const {contract} = state;

        const amount = {
            value: ethers.utils.parseEther(userData.amount) // Value is in wei
        }

        const transaction = await contract.buyCoffee(userData.name, userData.message, amount);
        await transaction.wait();
        console.log(`Transaction details: ${userData.name}
        ${userData.message}
        ${amount}`);

        console.log(userData);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };
  return (
    <div className="buy-coffee flex justify-between px-[40vh]">
        <div className="about-section pr-4">
            {ReactHtmlParser(about)}
        </div>
        <form className='text-center border-2 py-8 px-16 rounded-xl' onSubmit={buyCoffee} action="">
            <input 
                id='name' 
                type="text"
                name='name'
                className='block w-[40vh] my-8 py-2 px-4 bg-[#F2F1EB] border-2 rounded-lg'
                placeholder='Name or @yourTwitter (optional)'
                onChange={handleInputChange} />
            <input 
                type="text" 
                id="message"
                name='message'
                className='block w-[40vh] h-[10vh] px-4 bg-[#F2F1EB] border-2 rounded-lg'
                placeholder='Say Something Nice (optional)'
                onChange={handleInputChange} />
            <input 
                type="number"
                step="any"
                value={userData.amount}
                id='number'
                name='amount'
                className='block w-[40vh] my-8 px-4 bg-[#F2F1EB] border-2 rounded-lg'
                placeholder='Amount'
                onChange={handleInputChange} />
            <button 
                type="submit"
                className='bg-[#FFF5C2] py-2 px-4 rounded-xl font-semibold text-[#EC8F5E] mx-auto'
                >Support</button>
        </form>
    </div>
  )
}

export default Buy
