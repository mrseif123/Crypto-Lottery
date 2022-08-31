import React from 'react'

function Header() {
  return (
    <div className='flex items-center space-x-2'>
      <div>
        <img alt="profile picture" className='rounded-full h-20 w-20' src="https://avatars.githubusercontent.com/u/30297892?v=4" />
      </div>
      <div>
        <h1 className='text-lg text-white font-bold'>Crypto Lottery Draw</h1>
        <p className='text-xs text-emerald-500 truncate'>User...</p>
      </div>
    </div>
  )
}

export default Header