import React from 'react'
import {
  StarIcon, CurrencyDollarIcon, ArrowPathIcon, ArrowUturnDownIcon
} from '@heroicons/react/24/solid'

function AdminControls() {
  return (
    <div className='text-white px-5 py-3 rounded-md border-emerald-300/20 border'>
      <h2 className='font-bold'>Admin Controls</h2>
      <p className='mb-5'>Total commision to be withdrawn: { }</p>
      <div className='flex flex-col space-y-2'>
        <button className='admin-button'>
          <StarIcon className='h-6 mx-auto mb-2 md:flex-row md:space-y-0' />Draw Winner</button>
        <button className='admin-button'>
          <CurrencyDollarIcon className='h-6 mx-auto mb-2' />
          Withdraw Commision</button>
        <button className='admin-button'>
          <ArrowPathIcon className='h-6 mx-auto mb-2' />
          Restart Draw</button>
        <button className='admin-button'>
          <ArrowUturnDownIcon className='h-6 mx-auto mb-2' />
          Refund All</button>
      </div>
    </div>
  )
}

export default AdminControls