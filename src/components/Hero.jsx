import React from 'react'

const Hero = () => {
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
    <div style={{height:"75vh"}} className='sm:h-screen w-full flex flex-col '>
        
        <div className='w-full flex-1 bg-black/30 flex justify-center items-center flex-col font-main'>
          <div>
            <p className='text-xl'>Where</p>
            <h2 className='text-center sm:text-8xl text-6xl'>“ Hospitality<br></br>Meets<br></br>Spirituality ”</h2>
          </div>
          <button onClick={handleBookButton} className='sm:hidden block px-6 py-4 mt-10 font-base text-4xl text-base-500 transition-all '>Book Now →</button>
        </div>
    </div>
  )
}

export default Hero