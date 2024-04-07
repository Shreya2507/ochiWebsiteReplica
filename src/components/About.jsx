import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#bcd660] rounded-tl-3xl rounded-tr-3xl font-["Inter_Tight"] text-black'>
      <h1 className='text-[4vw] leading-[4.2vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>

      <div className="w-full flex gap-5 mt-10 pt-5 border-t-[1.5px] border-[#a1b562]">
        <div className="w-1/2">
            <h1 className='text-[4vw]'>Our approach :</h1>
            <button className='text-[1.1vw] flex gap-8 items-center uppercase px-6 py-4 mt-3 bg-zinc-900 rounded-full text-white'>Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div></button>
        </div>
        <div className="w-1/2 rounded-2xl overflow-hidden bg-red-500">
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
