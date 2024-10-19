import React from 'react'
import { RiReceiptFill } from "react-icons/ri";
import { IoIosArrowForward, IoMdNotifications } from "react-icons/io";

const Header = ({children}) => {
  return (
    <div>
      <div className='flex justify-between items-center text-xl m-2'>
        <div className='flex m-{10px} items-center text-blue-400'>
          <RiReceiptFill size={30} color='rgb(29 78 216)'/>
          <div className='p-2'>이자 100원 받기</div>
          <IoIosArrowForward size={30}/>
        </div>
        <IoMdNotifications size={30}/>
      </div>
      <section>{children}</section>
    </div>
  )
}

export default Header