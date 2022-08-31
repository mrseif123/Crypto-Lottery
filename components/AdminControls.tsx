import React from 'react'
import {
  StarIcon, CurrencyDollarIcon, ArrowPathIcon, ArrowUturnDownIcon
} from '@heroicons/react/24/solid'
import { useContract, useContractCall, useContractData } from '@thirdweb-dev/react'
import { ethers } from 'ethers'
import { currency } from "../constants"
import toast from 'react-hot-toast'

function AdminControls() {
  const { contract, isLoading } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS)
  const { data: totalCommission } = useContractData(contract, "operatorTotalCommission")
  const { mutateAsync: drawWinnerTicket } = useContractCall(contract, "DrawWinnerTicket")
  const { mutateAsync: refundAll } = useContractCall(contract, "RefundAll")
  const { mutateAsync: restartDraw } = useContractCall(contract, "restartDraw")
  const { mutateAsync: withdrawCommission } = useContractCall(contract, "WithdrawCommission")

  const handleDrawWinnerTicket = async () => {
    const notification = toast.loading("Picking the lucky Winner...🍀")
    try {
      const data = await drawWinnerTicket([{}])
      toast.success("Winner Picked! 🎉", { id: notification })
      console.log("call success")
    }
    catch (e) {
      toast.error("Something went wrong! 🤔", { id: notification })
      console.log("call failed")
    }
  }

  const handleRefundAll = async () => {
    const notification = toast.loading("Refunding...")
    try {
      const data = await refundAll([{}])
      toast.success("Done", { id: notification })
      console.log("call success")
    }
    catch (e) {
      toast.error("Something went wrong! 🤔", { id: notification })
      console.log("call failed")
    }
  }

  const handleRestartDraw = async () => {
    const notification = toast.loading("Restarting...")
    try {
      const data = await restartDraw([{}])
      toast.success("A new draw has started", { id: notification })
      console.log("call success")
    }
    catch (e) {
      toast.error("Something went wrong! 🤔", { id: notification })
      console.log("call failed")
    }
  }

  const handleWithdrawCommission = async () => {
    const notification = toast.loading("Withdrawing your commision...")
    try {
      const data = await withdrawCommission([{}])
      toast.success("Done! 🎉", { id: notification })
      console.log("call success")
    }
    catch (e) {
      toast.error("Something went wrong! 🤔", { id: notification })
      console.log("call failed")
    }
  }

  return (
    <div className='text-white px-5 py-3 rounded-md border-emerald-300/20 border'>
      <h2 className='font-bold text-center'>Admin Controls</h2>
      <p className='mb-5'>Total commision to be withdrawn: {totalCommission && ethers.utils.formatEther(totalCommission?.toString())}{" "}{currency}</p>
      <div className='flex flex-col space-y-2'>
        <button onClick={handleDrawWinnerTicket} className='admin-button'>
          <StarIcon className='h-6 mx-auto mb-2 md:flex-row md:space-y-0' />Draw Winner</button>
        <button onClick={handleWithdrawCommission} className='admin-button'>
          <CurrencyDollarIcon className='h-6 mx-auto mb-2' />
          Withdraw Commision</button>
        <button onClick={handleRestartDraw} className='admin-button'>
          <ArrowPathIcon className='h-6 mx-auto mb-2' />
          Restart Draw</button>
        <button onClick={handleRefundAll} className='admin-button'>
          <ArrowUturnDownIcon className='h-6 mx-auto mb-2' />
          Refund All</button>
      </div>
    </div>
  )
}

export default AdminControls