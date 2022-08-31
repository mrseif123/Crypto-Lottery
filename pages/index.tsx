import { useAddress, useContract, useMetamask, useDisconnect, useContractData, useContractCall } from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
const Home: NextPage = () => {
  const address = useAddress()

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
