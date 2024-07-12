import React from 'react'
import { useEffect } from 'react'
const Services = () => {
  useEffect(()=>{
    let roomCard = document.getElementById("roomcard");
    let innerPrice = document.getElementById("innerprice");
    roomCard.addEventListener("mouseover",()=>{
      innerPrice.style.opacity = "100";
      innerPrice.style.transform = "translateY(0)";
    })
    roomCard.addEventListener("mouseout",()=>{
      innerPrice.style.opacity = "0";
      innerPrice.style.transform = "translateY(1.25rem)";
    })
  },[])
  return (
    <div className='w-full font-main flex justify-center items-center flex-col py-10 polkaback'>
        <h2 className='text-2xl text-base-500 tracking-wide'>Kashi Mantram</h2>
        <h2 className='text-6xl text-base-500 '>Rooms & Services</h2>
        <div className='w-60 h-1 bg-base-500 flex justify-center items-center mt-2'>
            <div className='w-5 h-5 bg-base-500 rotate-45'></div>
        </div>
        <div className='w-full px-40 flex justify-center items-center flex-wrap gap-10 py-10 text-xl font-s'>
          <div id='roomcard' className='p-4 flex-1 flex justify-center items-end min-w-96 h-80 bg-gray-100 overflow-hidden'>
            <div className='font-s w-full flex justify-between items-end'>
              <p className='font-medium text-2xl text-base-500 tracking-tight'>Premium Room's</p>
              <p id='innerprice' className='opacity-0 transition-all translate-y-5 '>₹3,000-3,500</p>
            </div>
          </div>
          <div className='p-4 flex-1 flex justify-center items-end min-w-96 h-80 bg-gray-100 overflow-hidden'>
            <div className='font-s w-full flex justify-between items-end'>
              <p className='font-medium text-2xl text-base-500 tracking-tight'>Super Premium Room's</p>
              <p className=''>₹4,000</p>
            </div>
          </div>
          <div className='p-4 flex-1 flex justify-center items-end min-w-96 h-80 bg-gray-100 overflow-hidden'>
            <div className='font-s w-full flex justify-between items-end'>
              <p className='font-medium text-2xl text-base-500 tracking-tight'>Family Suit's</p>
              <p className=''>₹7,500</p>
            </div>
          </div>
          <div className='p-4 flex-1 flex justify-center items-end min-w-96 h-80 bg-gray-100 overflow-hidden'>
            <div className='font-s w-full flex justify-between items-end'>
              <p className='font-medium text-2xl text-base-500 tracking-tight'>Dor</p>
              <p className=''></p>
            </div>
          </div>
        </div>
        <h2 className='text-6xl text-base-500 '>Amenities</h2>
        <div className='w-60 h-1 bg-base-500 flex justify-center items-center mt-2'>
            <div className='w-5 h-5 bg-base-500 rotate-45'></div>
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