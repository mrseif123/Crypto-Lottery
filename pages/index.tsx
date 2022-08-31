import { useAddress, useContract, useMetamask, useDisconnect, useContractData, useContractCall } from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import PropagateLoader from "react-spinners/PropagateLoader";

const Home: NextPage = () => {
  const address = useAddress()
  const { contract, isLoading } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS)




  if (isLoading) {
    return (
      <div className='bg-[#091b18] h-screen flex flex-col items-center justify-center'>
        <div className='flex items-center space-x-2 mb-10'>
          <img className="rounded-full h-20 w-20"
            src="https://th.bing.com/th/id/R.cf3f7639754e0dc19bbc1a5f1666e347?rik=Ath%2b%2bmDhk6YVaw&pid=ImgRaw&r=0"
            alt="loading animation" />
          <h1 className='text-lg text-white font-bold'>Loading the Crypto Lottery</h1>
        </div>
        <PropagateLoader color='#ffffff' size={30} />
      </div>
    )
  }

  if (!address) {
    return (
      <Login />
    )
  }

  return (
    <div className="bg-[#091b18] min-h-screen flex flex-col">
      <Head>
        <title>Crypto Lottery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}

export default Home
