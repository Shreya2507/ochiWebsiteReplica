import React from 'react'
import {motion} from 'framer-motion';

export default function Marquee() {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] font-["Inter_Tight"]'>
        <div className="text border-t-2 border-b-2 border-zinc-500 flex whitespace-nowrap overflow-hidden gap-10">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease: "linear", duration: 10}} className='text-[19vw] leading-none font-["Inter_Tight"] font-semibold tracking-tighter uppercase pr-20'>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease: "linear", duration: 10}} className='text-[19vw] leading-none font-["Inter_Tight"] font-semibold tracking-tighter uppercase pr-20'>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease: "linear", duration: 10}} className='text-[19vw] leading-none font-["Inter_Tight"] font-semibold tracking-tighter uppercase pr-20'>We are ochi</motion.h1>

        </div>
      
    </div>
  )
}
