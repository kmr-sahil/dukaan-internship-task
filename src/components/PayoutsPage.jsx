import React from 'react'
import { IoChevronDown } from "react-icons/io5";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { BiTransfer } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";
import Navbar from './Navbar';
import List from './List';

function PayoutsPage() {

    const data = [
        {
            orderId: "#281209",
            status: "Successful",
            transactionId: "131634495747",
            refundDate: "Today, 08:45 PM",
            amount: "₹1,125.00"
        },
        {
            orderId: "#281208",
            status: "Pending",
            transactionId: "131634495747",
            refundDate: "Yesterday, 3:00 PM",
            amount: "₹1,125.00"
        },
        {
            orderId: "#281207",
            status: "Successful",
            transactionId: "131634495747",
            refundDate: "12 Jul 2023, 03:00 PM",
            amount: "₹1,125.00"
        },
        {
            orderId: "#281206",
            status: "Successful",
            transactionId: "131634495747",
            refundDate: "12 Jul 2023, 03:00 PM",
            amount: "₹1,125.00"
        },
        {
            orderId: "#281205",
            status: "Successful",
            transactionId: "131634495747",
            refundDate: "12 Jul 2023, 03:00 PM",
            amount: "₹1,125.00"
        },
        {
            orderId: "#281204",
            status: "Successful",
            transactionId: "131634495747",
            refundDate: "12 Jul 2023, 03:00 PM",
            amount: "₹1,125.00"
        },
    ]

  return (
    <div className='flex-1 flex flex-col '>

        <Navbar></Navbar>

        <div className='flex flex-col w-[100%] px-[2rem] py-[2rem] gap-[24px]'>

            <div className='flex w-[100%]'> {/* div1*/}
                <div className='w-[100%] flex justify-between items-center'>
                    <h1 className='text-[20px]'>Overview</h1>
                    <div className='flex gap-2 items-center border-[1px] px-[14px] py-[6px] rounded-lg'>
                        <h1 className='text-[1rem] font-extralight'>This Month</h1>
                        <IoChevronDown />
                    </div>
                </div>

            </div>

            <div className='flex justify-between'>   {/* div2 card collection*/}

                <div className='w-[32%] bg-blue-900 flex flex-col gap-[1rem] text-white pt-[20px] rounded-xl overflow-hidden'>

                        <div className='flex gap-[8px] items-center text-[16px] px-[20px]'>
                            <h2>Next Payout</h2>
                            <CiCircleQuestion />  
                        </div>

                        <div className='flex justify-between px-[20px]'>
                            <span className='text-[32px]'>₹2,312.23</span>
                            <a href="#" className='underline flex gap-2 items-center'>
                                23 orders 
                                <IoChevronDown className='-rotate-90' />
                            </a>
                        </div>

                        <div className='bg-blue-950 text-[14px] flex justify-between px-[24px] py-[8px]'>
                            <h2 className='opacity-60'>Next payout date:</h2>
                            <h2>Today, 04:00PM</h2>
                        </div>
                
                </div>

                <div className='w-[32%] self-start bg-zinc-100 flex flex-col gap-[1rem] text-black py-[20px] rounded-xl overflow-hidden'>

                        <div className='flex gap-[8px] items-center text-[16px] px-[20px]'>
                            <h2>Amount Pending</h2>
                            <CiCircleQuestion />  
                        </div>

                        <div className='flex justify-between px-[20px]'>
                            <span className='text-[32px]'>₹92,312.20</span>
                            <a href="#" className='underline flex gap-2 items-center'>
                                13 orders 
                                <IoChevronDown className='-rotate-90' />
                            </a>
                        </div>
                
                </div>

                <div className='w-[32%] self-start bg-zinc-100 flex flex-col gap-[1rem] text-black py-[20px] rounded-xl overflow-hidden'>

                        <div className='flex gap-[8px] items-center text-[16px] px-[20px]'>
                            <h2>Amount Processed</h2>
                            <CiCircleQuestion />  
                        </div>

                        <div className='flex justify-between px-[20px]'>
                            <span className='text-[32px]'>₹23,92,312.19</span>
                        </div>
                
                </div>
                
            </div>

            

        </div>

        <div className='flex flex-col px-[2rem]  gap-[24px]'>

            <h1 className='text-[20px] font-medium'>Transactions | This Month</h1>

            <div className='flex gap-[12px]'>
                <div className='px-[1rem] py-[6px] text-[#808080] bg-[#E6E6E6] rounded-full'>Payouts (22)</div>
                <div className='px-[1rem] py-[6px] text-white bg-blue-900 rounded-full'>Refunds (6)</div>
            </div>

            <div className='flex flex-col p-[12px] bg-slate-100 rounded-md'>  {/* list div with search */}

                <div className='flex items-center justify-between pb-[12px]'>
                    <div className='w-[360px] relative'>   {/* search div */}

                            <div>
                                <div className='text-[#808080] text-[1rem] absolute top-3 left-2'>
                                        <IoSearch />
                                </div>

                                <input className='w-[100%] border-[1px] border-[#E6E6E6] rounded-md pl-[2rem] pr-[0.5rem] py-[8px]' type="search" name="search" placeholder='Order ID or transaction ID' />
                            </div>
                    </div>

                    <div className='flex gap-[1rem]'>
                        <div className='flex gap-2 items-center border-[1px] px-[12px] py-[6px] bg-slate-50 rounded-lg'>
                            <h1 className='text-[1rem] '>Sort</h1>
                            <BiTransfer className='rotate-90' />
                        </div>

                        <div className='flex gap-2 items-center border-[1px] px-[12px] py-[6px] bg-slate-50 rounded-lg'>
                            <MdOutlineFileDownload />
                        </div>
                    </div>

                </div>
                

                <div className='flex justify-between items-center bg-[#E6E6E6] rounded-md text-[14px] px-[12px] py-[10px]'>
                        <h2 className='w-[14.16%]'>Order ID</h2>
                        <h2 className='w-[14.16%]'>Status</h2>
                        <h2 className='w-[14.16%]'>Transaction ID</h2>
                        <h2 className='w-[14.16%]'>Refund date</h2>
                        <h2 className='w-[14.16%] text-end'>Order amount</h2>
                </div>

                
            {data.map((item, index) => (
                <List key={index} data={item}/>
            ))}

            </div>


        </div>

    </div>
  )
}

export default PayoutsPage