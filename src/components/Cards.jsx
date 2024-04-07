import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-14 '>
            <div className="cardcontainer h-[60vh] w-1/2">
                <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]">
                    <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute left-8 bottom-8 px-3 py-1 border-[1px] border-[#cdea68] rounded-full text-[#cdea68] text-sm tracking-tight' >&#169;2019-2022</button>
                </div>
            </div>

            <div className="cardcontainer flex gap-5 h-[60vh] w-1/2">
                <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#103732]">
                    <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute left-8 bottom-8 px-3 py-1 border-[1px] border-white rounded-full text-white text-sm tracking-tight' >RATING 5.0 ON CLUTCH</button>
                </div>
                <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#103732]">
                    <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute left-8 bottom-8 px-3 py-1 border-[1px] border-white rounded-full text-white text-sm tracking-tight' >BUSINESS BOOTCAMP
                        ALUMNI</button>
                </div>
            </div>

        </div>
    )
}

export default Cards
