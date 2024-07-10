import React from 'react'

const Services = () => {
  return (
    <div className='w-full font-main flex justify-center items-center flex-col py-10 polkaback'>
        <h2 className='text-2xl text-base-500 tracking-wide'>Kashi Mantram</h2>
        <h2 className='text-6xl text-base-500 '>Rooms & Services</h2>
        <div className='w-60 h-1 bg-base-500 flex justify-center items-center mt-2'>
            <div className='w-5 h-5 bg-base-500 rotate-45'></div>
        </div>
        <h2 className='text-6xl text-base-500 '>Amenities</h2>
        <div className='w-60 h-1 bg-base-500 flex justify-center items-center mt-2'>
            <div className='w-5 h-5 bg-base-500 rotate-45'></div>
        </div>
        <div className='flex justify-center w-full flex-wrap px-40 gap-10 my-20 items-stretch'>
          <div className='flex-1 bg-white rounded-sm p-4 font-s border-base-500 border'>
            <p className='font-bold text-2xl tracking-tight mb-4'>Free Wi-Fi</p>
            <p>Get unlimited access to 24x7 high speed WiFi with all rooms. Never miss out on your work, entertainment or travelogue updates.</p>
          </div>
          <div className='flex-1 bg-white rounded-sm p-4 font-s border-base-500 border'>
            <p className='font-bold text-2xl tracking-tight mb-4'>Booking On Call</p>
            <p>You can definitely call the hotel directly</p>
          </div>
          <div className='flex-1 bg-white rounded-sm p-4 font-s border-base-500 border'>
            <p className='font-bold text-2xl tracking-tight mb-4'>Pickup & Drop</p>
            <p>Using our airport pickup or drop off service to avoid any scam that may happen along the way from the airport to our hotel at reasonable price.</p>
          </div>
          <div className='flex-1 bg-white rounded-sm p-4 font-s border-base-500 border'>
            <p className='font-bold text-2xl tracking-tight mb-4'>Doctor On Call</p>
            <p>We offer our guests with doctor on call services. We can call a doctor on request even at night in case any of the visitors suffers from any medical complications.</p>
          </div>
        </div>
    </div>
  )
}

export default Services