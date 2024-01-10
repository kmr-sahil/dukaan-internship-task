import React from 'react'
import profile from '../assets/profile.png'
import { IoChevronDown } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { LiaProductHunt } from "react-icons/lia";
import { BsTruck } from "react-icons/bs";
import { RxSpeakerLoud } from "react-icons/rx";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { LuPalette } from "react-icons/lu";
import { HiOutlineBolt } from "react-icons/hi2";
import { RiWallet3Line } from "react-icons/ri";


function Sidebar() {
  return (
    <div className='w-[14rem] fixed h-[100%] bg-blue-950 px-[10px] py-[16px] flex flex-col justify-between'>

        <div className='flex flex-col self-stretch justify-items-stretch gap-[24px]'>

            <div className='w-[192px] flex text-white gap-2 items-center justify-center'>

                <div className='w-[39px] h-[39px] rounded-md overflow-hidden object-cover'>
                    <img className='w-[39px] h-[39px] rounded-md object-cover' src={profile} alt="" />
                </div>
                
                <div className='flex flex-col items-start justify-evenly'>
                    <h1 className='text-[15px] font-medium'>Nishyan Store</h1>
                    <a className='text-[13px] font-extralight underline' href="#">Visit Store</a>
                </div>
                
                <div className='pl-2 text-[1.25rem] font-bold'>
                    <IoChevronDown />
                </div>
                
            </div>

        

            <div className='flex flex-col text-white'>

                    <a href='#' className='flex items-center gap-[12px] px-[1rem] py-[0.5rem]'>
                        <div className='text-[1.5rem] font-bold'>
                            <GoHome />
                        </div>
                        <h3 className='text-[14px]'>Home</h3>
                    </a>

                    <a href='#' className='flex items-center gap-[12px] px-[1rem] py-[0.5rem]'>
                        <div className='text-[1.5rem] font-bold'>
                            <LuClipboardList />
                        </div>
                        <h3 className='text-[14px]'>Orders</h3>
                    </a>

                    <a href='#' className='flex items-center gap-[12px] px-[1rem] py-[0.5rem]'>
                        <div className='text-[1.5rem] font-bold'>
                            <LiaProductHunt />
                        </div>
                        <h3 className='text-[14px]'>Products</h3>
                    </a>

                    <a href='#' className='flex items-center gap-[12px] px-[1rem] py-[0.5rem]'>
                        <div className='text-[1.5rem] font-bold'>
                            <BsTruck />
                        </div>
                        <h3 className='text-[14px]'>Delivery</h3>
                    </a>

                    <a href='#' className='flex items-center gap-[12px] px-[1rem] py-[0.5rem]'>
                        <div className='text-[1.5rem] font-bold'>
                            <RxSpeakerLoud />
                        </div>
                        <h3 className='text-[14px]'>Marketing</h3>
                    </a>

                    <a href='#' className='flex items-center gap-[12px] px-[1rem] py-[0.5rem]'>
                        <div className='text-[1.5rem] font-extralight'>
                            <TbBrandGoogleAnalytics />
                        </div>
                        <h3 className='text-[14px]'>Analytics</h3>
                    </a>

                    <a href='#' className='flex items-center gap-[12px] bg-blue-900 rounded-md px-[1rem] py-[0.5rem]'>
                        <div className='text-[1.5rem] font-bold'>
                            <MdPayments />
                        </div>
                        <h3 className='text-[14px]'>Payments</h3>
                    </a>

                    <a href='#' className='flex items-center gap-[12px] px-[1rem] py-[0.5rem]'>
                        <div className='text-[1.5rem] font-bold'>
                            <CiDiscount1 />
                        </div>
                        <h3 className='text-[14px]'>Discounts</h3>
                    </a>

                    <a href='#' className='flex items-center gap-[12px] px-[1rem] py-[0.5rem]'>
                        <div className='text-[1.5rem] font-bold'>
                            <BsPeople />
                        </div>
                        <h3 className='text-[14px]'>Audience</h3>
                    </a>

                    <a href='#' className='flex items-center gap-[12px] px-[1rem] py-[0.5rem]'>
                        <div className='text-[1.5rem] font-bold'>
                            <LuPalette />
                        </div>
                        <h3 className='text-[14px]'>Appearance</h3>
                    </a>

                    <a href='#' className='flex items-center gap-[12px] px-[1rem] py-[0.5rem]'>
                        <div className='text-[1.5rem] font-bold'>
                            <HiOutlineBolt />
                        </div>
                        <h3 className='text-[14px]'>Plugins</h3>
                    </a>

            </div>

            
        
        </div>

        <a href='#' className='w-full px-[12px] py-[6px] rounded-md flex text-white gap-[12px] items-center justify-start bg-blue-900'>

                <div className='w-[39px] h-[39px] text-[1.5rem] flex items-center justify-center bg-blue-700 font-bold rounded-md'>
                    <RiWallet3Line />
                </div>
                
                <div className='flex flex-col items-start justify-evenly'>
                    <h1 className='text-[13px] font-extralight'>Available Credits</h1>
                    <h1 className='text-[16px] font-semibold'>222.10</h1>
                </div>
                
        </a>

    </div>
  )
}

export default Sidebar