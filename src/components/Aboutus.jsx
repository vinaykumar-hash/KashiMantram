import React from 'react'

const Aboutus = () => {
  return (
    <div style={{background:"#F0F0F0"}} className='w-full font-main flex justify-center items-center flex-col py-10 '>
        <h2 className='text-2xl text-base-500 tracking-wide'>Kashi Mantram</h2>
        <h2 className='sm:text-6xl text-5xl text-base-500 '>About Us</h2>
        <div className='sm:w-60 w-48 h-0.5 bg-base-500 flex justify-center items-center mt-2'>
            <div className='w-4 h-4 bg-base-500 rotate-45'></div>
        </div>
        <div className='flex justify-center items-center sm:flex-row flex-col-reverse mx-40 gap-20 mt-10'>
            <p className='font-s text-xl flex-1 text-center'>Hotel Kashi Mantram, located at the spiritual capital of India, Varanasi. Best Luxury hotel with ample facility and clean rooms and bathrooms, located in prime location of Manduadih road, Varanasi. The hotel is around 3 kms from Shri Kashi Vishwanath Temple.</p>
            <div className='flex-1 min-w-80 h-60 bg-gray-500 border-base-500 border-l-4'></div>
        </div>
    </div>
  )
}

export default Aboutus