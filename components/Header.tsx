import React from 'react'
import NavButton from './NavButton'
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid"
function Header() {
  return (
    <header className='grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5'>
      <div className='flex items-center space-x-2'>
        <img alt="profile picture" className='rounded-full h-20 w-20' src="https://avatars.githubusercontent.com/u/30297892?v=4" />
        <div>
          <h1 className='text-lg text-white font-bold'>Crypto Lottery Draw</h1>
          <p className='text-xs text-emerald-500 truncate'>User...</p>
        </div>
      </div>

      <div className='hidden md:flex items-center justify-center rounded-md  md:col-span-3'>
        <div className='bg-[#0a1f1c] space-x-2 p-4'>
          <NavButton isActive title="Buy Tickets" />
          <NavButton title="Logout" />
        </div>
      </div>

      <div className='flex flex-col ml-auto text-right'>
        <Bars3BottomRightIcon className='h-8 w-8 mx-auto text-white cursor-pointer' />
        <span className='md:hidden'>
          <NavButton title="Logout" />
        </span>
      </div>



    </header>
  )
}

export default Header