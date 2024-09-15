import React from 'react'

const Contact = () => {
  return (
    <div className='relative flex justify-center sm:justify-between items-center flex-col sm:flex-row w-full px-4 sm:px-40 py-20 text-base-500'>
      <div style={{zIndex:0}} className='w-full h-full crossback absolute top-0 left-0 opacity-20'></div>
      <div style={{zIndex:1}} className='w-full h-full hideeffect absolute top-0 left-0'></div>
      <p style={{zIndex:2}} className='font-main text-4xl sm:text-6xl flex flex-col justify-center items-center gap-4' >
        <img className='w-auto h-40' src="/kashimantramlogo.jpg" alt="" />
        <p>Kashi Mantram</p>
        </p>
      <div style={{zIndex:2}} className='flex flex-col'>
        {/* <p className='flex-1 font-s text-4xl text-base-500 font-medium tracking-tight border-b-2'>Reach Us</p> */}
          <div className='flex-1 font-s text-xl pt-10 tracking-tight px-4 '>
            <p className='border-base-500 border-l-0 sm:border-l-4 pl-4 py-2'>Jangambadi , Bangalitola, Near Ganesh Mahal , Varanasi , Uttar Pradesh , 221001</p>
            <p className='border-base-500 border-l-0 sm:border-l-4 pl-4 pb-2'>Give Us a Call @ +91 8299-408652</p>
            <p className='border-base-500 border-l-0 sm:border-l-4 pl-4'>kashimantram@gmail.com</p>
          </div>
      </div>
        
    </div>
  )
}

export default Contact