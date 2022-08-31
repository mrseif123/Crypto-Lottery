import React, { useState } from 'react'
import { useAddress, useContract, useMetamask, useDisconnect, useContractData, useContractCall } from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import Loading from '../components/Loading'

import { ethers } from 'ethers'
import { currency } from "../constants"
import CountdownTimer from '../components/CountdownTimer'
import toast from "react-hot-toast"

const Home: NextPage = () => {
  const address = useAddress()
  const { contract, isLoading } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS)
  const [quantity, setQuantity] = useState(1)

  const { data: remainingTickets } = useContractData(contract, "RemainingTickets")
  const { data: pricePerTicket } = useContractData(contract, "CurrentWinningReward")
  const { data: ticketPrice } = useContractData(contract, "ticketPrice")
  const { data: ticketCommission } = useContractData(contract, "ticketCommission")
  const { data: expiration } = useContractData(contract, "expiration")
  const { mutateAsync: buyTickets } = useContractCall(contract, "BuyTickets")

  const handlePurchase = async () => {
    if (!ticketPrice) return
    const notification = toast.loading("Buying your tickets... 🎫")
    try {
      const data = await buyTickets(
        [
          {
            value: ethers.utils.parseEther(
              (
                Number(ethers.utils.formatEther(ticketPrice)) * quantity
              ).toString(),
            )
          }
        ]
      )
      toast.success("Ticket purchased!", { id: notification })
      console.log("Contract call success.")

    } catch (error) {
      toast.error("Error purchasing ticket", { id: notification })
      console.log("Contract call failed.", error)
    }

  }


  if (isLoading) return <Loading />

  if (!address) return <Login />

  return (
    <div className="bg-[#091b18] min-h-screen flex flex-col">
      <Head>
        <title>Crypto Lottery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-1">
        <Header />

        <div className='space-y-5 md:space-y-0 m-5 md:flex items-start justify-center md:space-x-5'>
          <div className='stats-container'>
            <h1 className='text-5xl text-white font-semibold text-center'>The Next Draw</h1>
            <div className='flex justify-between p-2 space-x-2'>
              <div className='stats'>
                <h2 className='text-sm'>Total Pool</h2>
                <p className='text-xl'>
                  {pricePerTicket && ethers.utils.formatEther(pricePerTicket.toString())}{" "}{currency}
                </p>
              </div>
              <div className='stats'>
                <h2 className='text-sm'>Tickets Remaining</h2>
                <p className='text-xl'>{remainingTickets?.toNumber()}</p>
              </div>
            </div>
            {/* countdown */}
            <div className='mt-5 mb-3'>
              <CountdownTimer />
            </div>
          </div>

          <div className='stats-container space-y-2'>
            <div className='stats-container'>
              <div className="flex justify-between items-center text-white pb-2">
                <h2 className='text-sm'>Price per ticket</h2>
                <p>
                  {ticketPrice && ethers.utils.formatEther(ticketPrice.toString())}{" "}{currency}
                </p>
              </div>
              <div className='flex text-white items-center space-x-2 bg-[#091b18] border-[#004337] border p-4'>
                <p>Tickets</p>
                <input onChange={(e) => setQuantity(Number(e.target.value))} value={quantity} placeholder='select quantity' className='flex w-full bg-transparent text-right outline-none' min={1} type="number" />
              </div>

              <div className='space-y-2 mt-5'>
                <div className='flex items-center font-extrabold justify-between text-emerald-300 text-sm italic'>
                  <p>Total cost of tickets</p>
                  <p>
                    {ticketPrice && Number(ethers.utils.formatEther(ticketPrice.toString())) * quantity}{" "}{currency}
                  </p>
                </div>
                <div className='flex items-center justify-between text-emerald-300 text-xs italic'>
                  <p>Service fees</p>
                  <p>
                    {ticketCommission && ethers.utils.formatEther(ticketCommission.toString())}{" "}{currency}
                  </p>
                </div>
                <div className='flex items-center justify-between text-emerald-300 text-xs italic'>
                  <p>+ Network fees</p>
                  <p>TBD</p>
                </div>
              </div>

              <button
                onClick={handlePurchase}
                disabled={expiration?.toString() < Date.now().toString() || remainingTickets?.toNumber() === 0}
                className='mt-4 w-full bg-gradient-to-br
              from-orange-500 to-emerald-600 px-10 py-5 rounded-md
              text-white shadow-xl disabled:from-gray-600
              disabled:text-gray-100 disabled:to-gray-600 
               disabled:cursor-not-allowed'>Buy Tickets
              </button>

            </div>
          </div>
        </div >
        <div></div>
      </div>
    </div >
  )
}

export default Home
