import { Web3Button } from '@thirdweb-dev/react'
import React from 'react'
import { useMetamask } from '@thirdweb-dev/react'

function Login() {
  const connect = useMetamask()
  return (
    <div className='bg-[#091b18] min-h-screen flex flex-col items-center justify-center text-center' >
      <div className='flex flex-col items-center mb-10'>
        <img className='rounded-full h-56 wo-56 mb-19'
          src="https://th.bing.com/th/id/R.cf3f7639754e0dc19bbc1a5f1666e347?rik=Ath%2b%2bmDhk6YVaw&pid=ImgRaw&r=0"
          alt="lottery picture"
        />
        <h1 className='text-6xl text-white font-bold py-3'>The Crypto Lottery</h1>
        <h2 className='text-white'>Get started by loggin in with your MetaMask</h2>
        <button onClick={connect} className='bg-white px-9 py-5 mt-10 rounded-lg shadow-lg font-bold'>
          Login with MetaMask
        </button>
        {/* <Web3Button>
          Mint NFT
        </Web3Button>; */}
      </div>
    </div>
  )
}

export default Login