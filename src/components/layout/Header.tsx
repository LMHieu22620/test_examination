
// import Avartar from "../../assets/Avatar.png";


import { MessageIcon, NotifiIcon, SearchIcon } from "@/public/svg";
import { SwitchMode } from "../SwitchMode";
import Link from "next/link";

export default function Header() {
    return (
        <div className='w-full h-[86px] px-10 py-6 '>
            <div className='flex justify-between items-center'>
                <div className='hidden md:block relative md:w-[360px]'>
                    <div className='absolute p-2 inset-y-0   flex items-center  pointer-events-none'>
                        <SearchIcon />
                    </div>
                    <input
                        className='hidden md:block bg-[#F4F4F4] w-full border outline-none border-[#ccc] text-gray-900 text-sm rounded-xl  ps-10 p-2.5  '
                        placeholder='Search or type a command'
                    />

                </div>
                <div className=' gap-4 hidden md:flex'>
                    <SwitchMode />
                    <div>
                        <MessageIcon />
                    </div>
                    <div>
                        <NotifiIcon />
                    </div>
                    {/* <img
                        className='w-full h-full  rounded-full'
                        // src={Avartar}
                        alt='Rounded avatar'
                    /> */}
                    <Link href={'/login'}>login</Link>
                </div>
                <div className='flex md:hidden w-full justify-between items-center'>
                    <button
                        // onClick={() => setIsOpenMenu(true)}
                        className='flex justify-center items-center cursor-pointer bg-transparent md:hidden'
                    >
                        <div className='w-full h-full flex justify-center items-center'>e</div>
                    </button>
                    {/* <SearchIcon />
            <MessageIcon />
            <NotifiIcon /> */}
                </div>
            </div>
        </div>
    )
}
