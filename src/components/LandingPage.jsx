import React from 'react'
import { motion } from "framer-motion";

import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1 font-["Inter_Tight"]'>
            <div className="textstructure mt-40 px-14">
                {["We Create", "Eye-opening", "Presentation"].map((item, index) => {
                    return (
                        <div className="masker">
                            <div className="w-fit flex items-center  overflow-hidden">
                                {index === 1 && (<motion.div initial={{ width: 0, height: "5.1vw"}} animate={{ width: "9vw", height: "5.1vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }} className=' mr-[1vw] w-[9vw] rounded-md relative overflow-hidden bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")]'></motion.div>)}
                                <div className="leading-[6.5vw] tracking-tight uppercase text-[7vw] font-['Inter_Tight'] font-[700] ">
                                    {item}
                                </div>

                            </div>
                        </div>

                    );
                })}
            </div>

            <div className='border-t-[1px]  border-zinc-800 mt-24 flex justify-between items-center py-3 px-14'>
                {["For public and private companies", "From the first pitch to IPO"
                ].map((item, index) =>
                    <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>)}
                <div className="start flex items-center gap-1">
                    <div className="uppercase px-4 py-[0.3rem] text-sm border-[1.5px] border-zinc-500 rounded-full">Start the project</div>
                    <div className=" w-9 h-9 border-[1.5px] border-zinc-500 rounded-full flex items-center justify-center">
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />

                        </span>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default LandingPage
