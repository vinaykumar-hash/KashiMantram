// import React from 'react'

// const Hero = () => {
//   function handleBookButton(){
//     let BookPage = document.getElementById("BookingPage");
//     BookPage.classList.remove("hidden");
//     BookPage.classList.add("flex");
//   }
//   function handlecancel(){
//     let BookPage = document.getElementById("BookingPage");
//     BookPage.classList.remove("flex");
//     BookPage.classList.add("hidden");
//   }
//   return (
//     <div style={{height:"75vh"}} className='sm:h-screen w-full flex flex-col '>
        
//         <div className='relative w-full flex-1 flex justify-center items-center flex-col font-main'>
//           <div className='absolute w-full h-full overflow-hidden' style={{zIndex:"-99"}}>
//             <img src="/rooms/premium/r1.jpg" alt="" className='sm:w-full'/>
//           </div>
//           <div style={{zIndex:"-98"}}>
//             <p className='text-xl'>Where</p>
//             <h2 className='text-center sm:text-8xl text-6xl'>“ Hospitality<br></br>Meets<br></br>Spirituality ”</h2>
//           </div>
//           <button onClick={handleBookButton} className='sm:hidden block px-6 py-4 mt-10 font-base text-4xl text-base-500 transition-all '>Book Now →</button>
//         </div>
//     </div>
//   )
// }

// export default Hero


import React, { useState, useEffect } from 'react';

const images = [
  '/rooms/premium/r1.jpg', 
  '/rooms/standard/r1.jpg', 
  '/rooms/familysuit/r1.jpg'
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 6000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  function handleBookButton() {
    let BookPage = document.getElementById("BookingPage");
    BookPage.classList.remove("hidden");
    BookPage.classList.add("flex");
  }

  function handleCancel() {
    let BookPage = document.getElementById("BookingPage");
    BookPage.classList.remove("flex");
    BookPage.classList.add("hidden");
  }

  return (
    <div style={{ height: "75vh" }} className='sm:h-screen w-full flex flex-col'>
      <div className='relative w-full flex-1 flex justify-center items-center flex-col font-main'>
        <div className='absolute w-full h-full overflow-hidden' style={{ zIndex: "-99" }}>
          {/* Image slideshow with fade effect */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`slide-${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
              style={{ transition: 'opacity 1s ease-in-out' }}
            />
          ))}
        </div>

        <div style={{ zIndex: "-98" }} className='text-white antialiased'>
          <p className='text-xl' >Where</p>
          <h2 className='text-center sm:text-8xl text-6xl' style={{textShadow:"0px 0px 30px black"}}>
            “ Hospitality<br />Meets<br />Spirituality ”
          </h2>
        </div>

        <button onClick={handleBookButton} className='sm:hidden block px-6 py-4 mt-10 font-base text-4xl text-base-500 transition-all bg-white rounded-sm'>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
