import React from 'react'
import { useEffect } from 'react'
const Services = () => {
  return (
    <div className='w-full font-main flex justify-center items-center flex-col py-10 polkaback'>
        <h2 className='text-2xl text-base-500 tracking-wide'>Kashi Mantram</h2>
        <h2 className='sm:text-6xl text-4xl px-4 text-base-500 '>Rooms & Services</h2>
        <div className='w-60 h-0.5 bg-base-500 flex justify-center items-center mt-2'>
            <div className='w-4 h-4 bg-base-500 rotate-45'></div>
        </div>
        <div className='w-full px-10 sm:px-40 flex justify-center items-center flex-wrap gap-10 py-10 text-xl font-s'>
        <div id='roomcard' className='relative roomcard flex-auto sm:flex-1 w-full flex flex-col justify-end items-end sm:min-w-96 h-80 bg-gray-100 overflow-hidden'>
          <img className='absolute hover:scale-110 transition-all h-full w-full object-cover' src="/rooms/premium/r1.jpg" alt="" />
          <div  className='bg-white/50 relative font-s w-full flex justify-between sm:flex-row flex-col items-start sm:items-end border-base-500/50 border-t p-4 overflow-hidden backdrop-blur-md'>
            <div className='w-full h-20 absolute -top-20 right-10 blur-3xl bg-white/50'></div>
            <p className='font-medium inline text-xl text-base-700'>Premium Rooms</p>
            <p id='innerprice' className='text-xl sm:text-xl innerprice1 opacity-100 transition-all '>₹3,500</p>
          </div>
        </div>
        <div id='roomcard' className='relative roomcard flex-auto sm:flex-1 w-full flex justify-center items-end sm:min-w-96 h-80 bg-gray-100 overflow-hidden'>
          <img className='absolute hover:scale-110 transition-all h-full w-full object-cover' src="/rooms/premium/r1.jpg" alt="" />
          <div className='bg-white/50 relative font-s w-full flex justify-between sm:flex-row flex-col items-start sm:items-end border-base-500/50 border-t p-4 overflow-hidden backdrop-blur-md'>
            <div className='w-full h-20 absolute -top-20 right-10 blur-3xl bg-white/50'></div>
            <p className='font-medium inline text-xl  text-base-700'>Super Premium Rooms</p>
            <p id='innerprice' className='text-xl sm:text-xl innerprice1 opacity-100 transition-all '>₹4,000</p>
          </div>
        </div>
        <div id='roomcard' className='relative roomcard flex-auto sm:flex-1 w-full flex justify-center items-end sm:min-w-96 h-80 bg-gray-100 overflow-hidden'>
          <img className='absolute hover:scale-110 transition-all h-full w-full object-cover' src="/rooms/familysuit/r1.jpg" alt="" />
          <div className='bg-white/50 relative font-s w-full flex justify-between sm:flex-row flex-col items-start sm:items-end border-base-500/50 border-t p-4 overflow-hidden backdrop-blur-md'>
            <div className='w-full h-20 absolute -top-20 right-10 blur-3xl bg-white/50'></div>
            <p className='font-medium inline text-xl  text-base-700'>Family Suit's</p>
            <p id='innerprice' className='text-xl sm:text-xl innerprice1 opacity-100 transition-all '>₹7,500</p>
          </div>
        </div>
        <div id='roomcard' className='relative roomcard flex-auto sm:flex-1 w-full flex justify-center items-end sm:min-w-96 h-80 bg-gray-100 overflow-hidden'>
          <img className='absolute hover:scale-110 transition-all h-full w-full object-cover' src="/rooms/standard/r1.jpg" alt="" />
          <div className='bg-white/50 relative font-s w-full flex justify-between sm:flex-row flex-col items-start sm:items-end border-base-500/50 border-t p-4 overflow-hidden backdrop-blur-md'>
            <div className='w-full h-20 absolute -top-20 right-10 blur-3xl bg-white/50'></div>
            <p className='font-medium inline text-xl  text-base-700'>Standard Rooms</p>
            <p id='innerprice' className='text-xl sm:text-xl innerprice1 opacity-100 transition-all '>₹----</p>
          </div>
        </div>
          
        </div>
        <h2 className='text-5xl text-base-500 '>Amenities</h2>
        <div className='w-60 h-0.5 bg-base-500 flex justify-center items-center mt-2'>
            <div className='w-4 h-4 bg-base-500 rotate-45'></div>
        </div>
        <div className='flex justify-center w-full flex-wrap px-40 gap-10 my-10 items-stretch'>
          <div className='flex-1 bg-white rounded-sm p-4 font-s border-base-500 border min-w-80 hover:border-l-4 transition-all'>
            <p className='font-bold text-2xl tracking-tight mb-4'>Free Wi-Fi</p>
            <p>Get unlimited access to 24x7 high speed WiFi with all rooms. Never miss out on your work, entertainment or travelogue updates.</p>
          </div>
          <div className='flex-1 bg-white rounded-sm p-4 font-s border-base-500 border min-w-80 hover:border-l-4 transition-all '>
            <p className='font-bold text-2xl tracking-tight mb-4'>Booking On Call</p>
            <p>You can definitely call the hotel directly</p>
          </div>
          <div className='flex-1 bg-white rounded-sm p-4 font-s border-base-500 border min-w-80 hover:border-l-4 transition-all'>
            <p className='font-bold text-2xl tracking-tight mb-4'>Pickup & Drop</p>
            <p>Using our airport pickup or drop off service to avoid any scam that may happen along the way from the airport to our hotel at reasonable price.</p>
          </div>
          <div className='flex-1 bg-white rounded-sm p-4 font-s border-base-500 border min-w-80 hover:border-l-4 transition-all'>
            <p className='font-bold text-2xl tracking-tight mb-4'>Doctor On Call</p>
            <p>We offer our guests with doctor on call services. We can call a doctor on request even at night in case any of the visitors suffers from any medical complications.</p>
          </div>
        </div>
    </div>
  )
}

export default Services