import React from 'react'

const Navbar = ({account}) => {
    return (
      <div className='flex justify-between px-4 py-4'>
          <h1 className='text-xl font-bold  text-[#F3B664]'>Brew Me A Latte</h1>
          <h1>Connected to: {account}</h1>
      </div>
    )
}

export default Navbar
