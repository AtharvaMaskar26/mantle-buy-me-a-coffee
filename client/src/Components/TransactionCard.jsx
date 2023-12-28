import React from 'react'

const TransactionCard = ({name, message, from, amount}) => {
  return (
   <div className="memo-card ">
        <h1><span className='font-bold'>@{name}</span> donated {amount} MNT</h1>
        <p className='text-[2vh]  text-slate-400'>{from}</p>
        <p className='border-2 py-2 px-4 my-2 rounded-xl bg-slate-200'>{message}</p>
   </div>
  )
}

export default TransactionCard
