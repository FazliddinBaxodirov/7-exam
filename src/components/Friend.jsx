import React from 'react'
import { IgnoreIcon, UserICon } from '../assets/Icons'
import friends from '../assets/images/friend.png'

export default function Friend() {
  return (
    <div className='bg-black px-[20px] w-[360px] pt-[26px]'>
      <div className='flex gap-[97px] '>
        <h3 className='text-[#CCCCCC] font-bold text-[20px] leading-[25.3px] '>Friend Activity</h3>
        <div className='flex items-center gap-5'>
          <UserICon />
          <IgnoreIcon />
        </div>
      </div>
      <p className='text-[18px] font-normal text-[#CCC] mt-[36px] mb-[23px]'>Let friends and followers on Spotify see what you’re listening to.</p>
      <div className='space-y-[20px]'>
        <img src={friends} alt="" />
        <img src={friends} alt="" />
        <img src={friends} alt="" />
      </div>
      <p className='text-[18px] font-normal text-[#CCC] mt-[21px]'>
      Go to Settings Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.
      </p>
      <div className='text-center mt-[23px]'>
        <button className='uppercase w-[233px] rounded-[40px] bg-white py-[20px]'>
          Settings
        </button>
      </div>
    </div>
  )
}
