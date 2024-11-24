import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Aboutus from './components/Aboutus'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
function App() {
  function handleBookButton(){
    let BookPage = document.getElementById("BookingPage");
    BookPage.classList.remove("hidden");
    BookPage.classList.add("flex");
  }
  function handlecancel(){
    let BookPage = document.getElementById("BookingPage");
    BookPage.classList.remove("flex");
    BookPage.classList.add("hidden");
  }
  return (
    <div className='antialiased'>
      <div className='sm:px-20 px-4 py-2 w-full h-max bg-base-700 text-white tracking-wide font-thin flex justify-between sm:flex-row flex-col'><p> We Use Best Practice To Maintain Environment</p><p>For Reservations - 05424501356</p></div>
      <div id='BookingPage' style={{zIndex:999}} className='absolute top-0 left-0 w-full h-screen bg-black/50 hidden justify-center items-center'>
        <div className='transition-all relative w-full sm:w-3/4 h-full sm:h-3/4 bg-white rounded-sm flex justify-center items-center flex-col gap-10 px-10 sm:px-0'>
          <p onClick={handlecancel} className='absolute top-5 left-10 text-4xl cursor-pointer'>←</p>
          <div className='flex justify-center items-center flex-col gap-5'>
            <p className='font-s font-semibold text-4xl text-center sm:text-4xl tracking-tight text-black/80' >Book Directly with us to get Best Discount*</p>
            <p className='flex jsutify-center items-center sm:flex-col flex-col text-2xl font-s font-regular gap-4'><div className='flex'><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/90/e1a140/phone--v1.png" alt="phone--v1"/>Give Us a Call</div><div className='flex sm:flex-row flex-col items-center'><p className='underline decoration-base-500 underline-offset-4 decoration-1'>+91 8299-408652 </p><p className='no-underline'>&nbsp;or &nbsp;</p><p className='underline decoration-base-500 underline-offset-4 decoration-1'>0542-4501356</p></div> </p>
          </div>
          <div className='sm:w-60 w-48 h-0.5 bg-base-500 flex justify-center items-center mt-2'>
            <div className='w-4 h-4 bg-base-500 rotate-45'></div>
        </div>
        <div className='flex justify-center items-center flex-col gap-5'>
          <div className='font-s text-black/80'>
            <p className='text-xl tracking-tight text-center sm:text-left'>Book With</p>
            <p className='text-4xl font-semibold tracking-tight text-center'>Hotel Booking Website's</p>
          </div>
          <div className='flex justify-center items-center flex-col sm:flex-row gap-10 sm:gap-6'>
            <a className='sm:scale-100 scale-150' href="https://www.airbnb.co.in/rooms/1225813929437791454?guests=1&adults=1&s=67&unique_share_id=5caf138b-47a1-4142-b2c2-bd908b8aa3d9"><img className='w-auto h-10 sm:h-20' src="/Airbnb.png" alt="" /></a>
            <a className='scale-75' href=""><img className='w-auto h-10 sm:h-20' src="/booking.png" alt="" /></a>
            
          </div>
        </div>
        </div>
      </div>
      <div className='flex justify-between items-center sm:flex-row flex-col w-full sm:py-4 px-4 sm:px-20 py-8'>
            <h1 className='font-main tracking-tight text-4xl text-base-500'>Kashi Mantram</h1>
            <button onClick={handleBookButton} className='sm:block hidden font-s text-2xl tracking-tight text-white px-4 py-2 bg-base-600 rounded-sm font-medium'>Book Now</button>
        </div>
        
      <div className='sticky  top-0 z-50 bg-white font-s w-full hidden sm:flex justify-center gap-10 items-center text-lg text-base-500 py-4 px-4'>
          <button id='HomeBtn' className='border-b-2 border-transparent hover:border-base-500 transition-all'>Home</button>
          <button id='AboutBtn' className='border-b-2 border-transparent hover:border-base-500 transition-all'>About Us</button>
          <button id='RoomsBtn' className='border-b-2 border-transparent hover:border-base-500 transition-all'>Rooms</button>
          <button id='contactBtn' className='border-b-2 border-transparent hover:border-base-500 transition-all'>Contact Us</button>
        </div>
      <Hero/>
      <Aboutus/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <div className='w-full text-white text-base font-thin bg-base-500 text-center'>Developed by Vinay Choudhary | vinaykumar7525@gmail.com</div>
    </div>
  )
}

export default App
