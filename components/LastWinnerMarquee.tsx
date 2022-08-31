import React from 'react'

interface Props {
  lastWinner: string
  lastWinnerAmount: string
}


function LastWinnerMarquee({ lastWinner, lastWinnerAmount }: Props) {
  console.log(lastWinner)
  console.log(lastWinnerAmount)
  return (
    <div className='space-x-2 flex mx-10'>
      <h4 className='text-white font-bold'>Last Winner: {lastWinner?.toString()}
      </h4>
      <h4 className='text-white font-bold'> &  Previous winnings: {lastWinnerAmount?.toString()}</h4>
    </div>
  )
}

export default LastWinnerMarquee