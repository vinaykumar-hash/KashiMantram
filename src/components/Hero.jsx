import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen w-full flex flex-col '>
        <div className='flex justify-between items-center w-full py-4 px-20'>
            <h1 className='font-main tracking-tight text-4xl text-base-500'>Kashi Mantram</h1>
            <button className='font-s text-2xl tracking-tight text-white px-4 py-2 bg-base-600 rounded-sm font-medium'>Book Now</button>
        </div>
        <div className='font-s w-full flex justify-center gap-10 items-center text-lg text-base-500 py-4'>
          <button className='border-b-2 border-transparent hover:border-base-500 transition-all'>Home</button>
          <button className='border-b-2 border-transparent hover:border-base-500 transition-all'>About Us</button>
          <button className='border-b-2 border-transparent hover:border-base-500 transition-all'>Rooms</button>
          <button className='border-b-2 border-transparent hover:border-base-500 transition-all'>Contact Us</button>
        </div>
        <div className='w-full flex-1 bg-black/30 flex justify-center items-center font-main'>
          <div>
            <p className='text-xl'>Where</p>
            <h2 className='text-center text-8xl'>“ Hospitality<br></br>Meets<br></br>Spirituality ”</h2>
          </div>
        </div>
    </div>
  )
}

export default Hero