import React from 'react'
import { useState } from 'react'

const CARD = ({className, img , karzina , Btnclass}) => {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false)


  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1)
    setLike(!like)
  }
  return (
    <>
        <div className={`border-solid border-[#000000] py-[28px] px-[28px] rounded-[28px] border-t-2 border-r-2 border-b-8 border-l-2 ${className}`}>
            <div className='w-[43px] absolute ml-[280px] mt-[20px] text-center'>
            <svg onClick={increaseCount} stroke='red' className={`w-10 h-10 cursor-pointer transition-colors duration-100}`} viewBox="0 0 24 24" 
            fill={!like ? "white" : "red"}xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
             </svg>
             <h2>{count}</h2>
            </div>
            <img src={img} className={`mx-auto mb-[26px]`} alt="" />
            <h2 className={`w-[291px] mb-[18px] font-bold`}>NIKE AIR FORCE 1 ‘07 (white/black) $89.99</h2>
            <p className={`w-[291px] mb-[17px]`}>I lost left shoe, don’t need this one anymore. Please buy it.</p>
            <button className={`rounded-[28px] w-[344px] h-[74px] px-[21px] flex items-center gap-[66px] border-solid bg-[#FFC700] border-black border-t-2 border-r-2 border-b-8 border-l-2 ${Btnclass}`}>
                <img src={karzina} alt="" />
                <h2>Add to cart</h2>
            </button>   
        </div>
    </>
  )
}

export default CARD
