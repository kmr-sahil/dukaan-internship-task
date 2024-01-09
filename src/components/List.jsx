import React from 'react'

function List({data}) {
  return (
    <div className='flex justify-between items-center text-[14px] px-[12px] py-[14px] border-b-[1px] border-[#E6E6E6]'>
                        <h2 className='w-[14.16%] text-blue-600 font-semibold'>{data?.orderId}</h2>
                        <div className='w-[14.16%] flex gap-[6px] items-center'>
                            <div className={`w-[10px] h-[10px] ${data?.status == "Successful" ? "bg-green-600 rounded-full" : "bg-zinc-400 rounded-full"} `}></div>
                            <h2 className=''>{data?.status}</h2>
                        </div>
                        <h2 className='w-[14.16%]'>{data?.transactionId}</h2>
                        <h2 className='w-[14.16%]'>{data?.refundDate}</h2>
                        <h2 className='w-[14.16%] text-end font-semibold'>{data?.amount}</h2>
    </div>
  )
}

export default List