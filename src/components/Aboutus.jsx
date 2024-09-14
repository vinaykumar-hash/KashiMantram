import React from 'react'

const Aboutus = () => {
  return (
    <div style={{background:"#F0F0F0"}} className='w-full font-main flex justify-center items-center flex-col py-10 '>
        <h2 className='text-2xl text-base-500 tracking-wide'>Kashi Mantram</h2>
        <h2 className='sm:text-6xl text-5xl text-base-500 '>About Us</h2>
        <div className='sm:w-60 w-48 h-0.5 bg-base-500 flex justify-center items-center mt-2'>
            <div className='w-4 h-4 bg-base-500 rotate-45'></div>
        </div>
        <div className='flex justify-center items-center sm:flex-col flex-col-reverse gap-20 mt-12'>
            <p className='flex flex-col font-s text-xl flex-1 text-center gap-4 mx-40'>
              <p>Hotel Kashi Mantram, located at the spiritual capital of India, Varanasi. Best Luxury hotel with ample facility and clean rooms and bathrooms.</p>
              <p>Located just a 2-minute walk from <span class='font-bold text-base-500 tracking-tight'>Godowlia</span>, often referred to as the <span class='font-bold text-base-500 tracking-tight'>Times Square of Varanasi</span>, our prime location places you at the center of the city's cultural pulse.</p>
              <p>The iconic <span class='font-bold text-base-500 tracking-tight'>Kashi Vishwanath Temple</span> is a mere 5-10 minutes away on foot, allowing you to easily immerse yourself in its spiritual ambiance.</p>
              {/* <p> Our prime location ensures that all major tourist attractions are within close reach, and various transportation options are readily available for your convenience.</p> */}
            </p>
            <div className='w-full h-60 overflow-hidden'>
              <div className='scroll-container h-full'>
                <img src="rooms/premium/r1.jpg" alt="" />
                <img src="rooms/familysuit/r1.jpg" alt="" />
                <img src="rooms/standard/r1.jpg" alt="" />
                <img src="rooms/premium/r2.jpg" alt="" />
                <img src="rooms/premium/r3.jpg" alt="" />
                <img src="rooms/premium/r4.jpg" alt="" />
                <img src="rooms/premium/r1.jpg" alt="" />
                <img src="rooms/familysuit/r1.jpg" alt="" />
                <img src="rooms/standard/r1.jpg" alt="" />
                <img src="rooms/premium/r2.jpg" alt="" />
                <img src="rooms/premium/r3.jpg" alt="" />
                <img src="rooms/premium/r4.jpg" alt="" />
              </div>
            </div>

        </div>
    </div>
  )
}

export default Aboutus