import React from 'react'
import { CiCircleQuestion } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { BiSolidCommentDots } from "react-icons/bi";
import { GoTriangleDown } from "react-icons/go";

function Navbar() {
  return (
    <div className=' w-full flex items-center justify-between gap-[1rem] px-[32px] py-[12px] border-b-[1px] border-[#D9D9D9]'>

            <div className='w-[360px] flex gap-[1rem] items-center'>
                <h1 className='text-[20px]'>Payouts</h1>
                <div className='text-[12px] flex gap-2 items-center'>
                    <CiCircleQuestion />
                    <p>How it Works</p>
                </div>
            </div>

            <div className='w-[360px] flex relative'>
                    <div className='text-[#808080] text-[1rem] absolute top-3 left-2'>
                        <IoSearch />
                    </div>
                            
                    <input className='w-[100%] bg-[#F2F2F2] rounded-md pl-[2rem] pr-[0.5rem] py-[8px]' type="search" name="search" placeholder='Search features, tutorials, etc.' />
            </div>

            <div className='justify-end flex w-[360px] gap-2'>
                <div className='w-[40px] h-[40px] flex items-center justify-center text-[20px] bg-[#E6E6E6] rounded-full'>
                    <BiSolidCommentDots />
                </div>
                <div className='w-[40px] h-[40px] flex items-center justify-center text-[20px] bg-[#E6E6E6] rounded-full'>
                    <GoTriangleDown />
                </div>
            </div>
           
        </div>
  )
}

export default Navbar