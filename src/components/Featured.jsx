import React, { useState } from 'react'
import {motion} from 'framer-motion';
import { Power4 } from 'gsap';
// import {Power4} from 'gsap';

function Featured() {
    const[isHoveringLeft, setHoveringLeft] = useState(false);
    const[isHoveringRight, setHoveringRight] = useState(false);
   

    return (
        <div className='w-full py-20 font-["Inter_Tight"]'>
            <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-12">
                <h1 className='text-6xl'>Featured projects</h1>
            </div>

            <div className='px-20'>
                <div className="card w-full flex gap-10 mt-10">
                    <div onMouseEnter={()=>setHoveringLeft(true)} onMouseLeave={()=>setHoveringLeft(false)} className="cardcontainer rounded-xl w-1/2 h-[75vh] relative ">
                        <div className=" flex overflow-hidden absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#bcd660] font-semibold z-[9] text-8xl leading-none tracking-tight">
                        {"FYDE".split('').map((item, index)=> <motion.span initial={{y:"100%"}} animate={isHoveringLeft ? ({y:"0"}) : ({y: "100%"})} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}} className='inline-block' >{item}</motion.span>)}</div>
                        <div className="card w-full h-full rounded-xl hover:scale-95 transition-all ease-in-out overflow-hidden">
                            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" />
                        </div>
                    </div>
                    <div onMouseEnter={()=>setHoveringRight(true)} onMouseLeave={()=>setHoveringRight(false)} className="cardcontainer relative   rounded-xl w-1/2 h-[75vh] ">
                    <div className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#bcd660] font-semibold z-[9] text-8xl leading-none tracking-tight">
                        {"VISE".split('').map((item, index)=> <motion.span initial={{y:"100%"}} animate={isHoveringRight ? ({y:"0"}) : ({y: "100%"})} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}} className='inline-block'>{item}</motion.span>)}
                        </div>
                        <div className="card w-full h-full rounded-xl hover:scale-95 transition-all ease-in-out overflow-hidden">
                            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" />
                        </div>
                    </div>
                </div>

            </div>





        </div>
    )
}

export default Featured
