import React from 'react'

function Footer() {
  return (
    <footer className='border-t border-emerald-500/20 flex items-center text-white justify-between p-5'>
      <img className='h-10 w-10 filter hue-rotate-90 opacity-20 rounded-full'
        src="https://icon-library.com/images/announcement-icon/announcement-icon-16.jpg" alt="discalimer" />

      <p className='text-xs text-emerald-900 pl-5'>
        DISCLAIMER; the website is published by Seaf Aliyan ("the developer"), the operator of Crypto Lottery. The developer takes all reasonable measures to make sure the information is accurate but gives no representation or warranty (express or implied) about this site including the accuracy or completeness of its contents.

        You are responsible for any decision made by you based on information on this site. The developer and its directors, employees or agents accept no liability for loss or damage (including, without limitation, any special, direct, indirect or consequential loss or damage or other losses or damage of whatever kind) that arise out of or relate to the use of this site or its contents.

        If there is any conflict between the information on this site and the Rules and Procedures for National Lottery games (as amended from time to time), the Rules and Procedures will take priority.
      </p>
    </footer>
  )
}

export default Footer