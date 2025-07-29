// import React from 'react'
// import { useEffect } from 'react'
// const Services = () => {
//   useEffect(()=>{
//     const scrollButton = document.getElementById("RoomsBtn");
//     const targetElement = document.getElementById('Roomspage');
//     scrollButton.addEventListener('click', ()=>{
//       targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     });

//   },[])
//   let standard_rooms = ['rooms/standard/p1.jpg','rooms/standard/p2.jpg','rooms/standard/p3.jpg','rooms/standard/p4.jpg','rooms/standard/p5.jpg','rooms/standard/p6.jpg',]
//   function Show_Photos(id){
//     if(id===-1){
//       let card = document.getElementById("standard_rooms");
//       card.classList.remove("flex");
//       card.classList.add("hidden");
//     }
//     else{
//       if(id===1){
//         let card = document.getElementById("standard_rooms");
//         card.classList.remove("hidden");
//         card.classList.add("flex");
//       }
//     }
    

//   }
//   return (
//     <div id='Roomspage' className='w-full font-main flex justify-center items-center flex-col py-10 polkaback'>
//         <h2 className='font-main2 text-2xl text-base-500 '>Kashi Mantram</h2>
//         <h2 className='sm:text-6xl text-4xl px-4 text-base-500 font-main2'>Rooms & Services</h2>
//         <div className='w-60 h-0.5 bg-base-500 flex justify-center items-center mt-2'>
//             <div className='w-4 h-4 bg-base-500 rotate-45'></div>
//         </div>
//         <div className='w-full px-10 sm:px-40 flex justify-center items-center flex-wrap gap-10 py-10 text-xl font-s'>
//         <div id='standard_rooms'  className=' bg-black/50 w-screen h-screen absolute hidden justify-center items-center' style={{zIndex:999}}>
//           <div style={{height:"80%"}} className='w-9/12 bg-white p-8 gap-8 rounded-sm overflow-hidden flex flex-col'>
//             <p className='text-4xl font-bold tracking-tight text-base-700 flex justify-between'><p>Standard Rooms</p>  <p onClick={()=>{Show_Photos(-1)}}  className=' text-4xl cursor-pointer'>←</p></p>
//             <div className='flex flex-wrap h-full gap-4 overflow-y-scroll example '>
//               {standard_rooms.map((imageName, index) => (
//                 <img className='h-3/4 flex-grow' key={index} src={imageName} alt={imageName.split(".")[0]} />
//               ))}
//             </div>
//           </div>
//         </div>
//         <div onClick={()=>{Show_Photos(1)}} id='roomcard' className='relative roomcard flex-auto sm:flex-1 w-full flex justify-center items-end sm:min-w-96 h-80 bg-gray-100 overflow-hidden'>
          
//           <img className='absolute hover:scale-110 transition-all h-full w-full object-cover' src="out3.jpg" alt="" />
//           <div className='bg-white/50 relative font-s w-full flex justify-between sm:flex-row flex-col items-start sm:items-end border-base-500/50 border-t p-4 overflow-hidden backdrop-blur-md'>
//             <div className='w-full h-20 absolute -top-20 right-10 blur-3xl bg-white/50'></div>
//             <p className='font-medium inline text-xl  text-base-700'>Standard Rooms</p>
//               <div className='absolute h-screen w-screen flex justify-center items-center' style={{zIndex:"999"}}></div>
//                 <div className='w-3/4 h-3/4 bg-black'></div>
//             {/* <p id='innerprice' className='text-xl sm:text-xl innerprice1 opacity-100 transition-all '>₹3,000</p> */}
//           </div>
//         </div>
//         <div id='roomcard' className='relative roomcard flex-auto sm:flex-1 w-full flex flex-col justify-end items-end sm:min-w-96 h-80 bg-gray-100 overflow-hidden'>
//           <img className='absolute hover:scale-110 transition-all h-full w-full object-cover' src="/rooms/premium/nprimum1.jpg" alt="" />
//           <div  className='bg-white/50 relative font-s w-full flex justify-between sm:flex-row flex-col items-start sm:items-end border-base-500/50 border-t p-4 overflow-hidden backdrop-blur-md'>
//             <div className='w-full h-20 absolute -top-20 right-10 blur-3xl bg-white/50'></div>
//             <p className='font-medium inline text-xl text-base-700'>Premium Rooms</p>
//             {/* <p id='innerprice' className='text-xl sm:text-xl innerprice1 opacity-100 transition-all '>₹3,500</p> */}
//           </div>
//         </div>
//         <div id='roomcard' className='relative roomcard flex-auto sm:flex-1 w-full flex justify-center items-end sm:min-w-96 h-80 bg-gray-100 overflow-hidden'>
//           <img className='absolute hover:scale-110 transition-all h-full w-full object-cover' src="/rooms/spremium/spremium1.jpg" alt="" />
//           <div className='bg-white/50 relative font-s w-full flex justify-between sm:flex-row flex-col items-start sm:items-end border-base-500/50 border-t p-4 overflow-hidden backdrop-blur-md'>
//             <div className='w-full h-20 absolute -top-20 right-10 blur-3xl bg-white/50'></div>
//             <p className='font-medium inline text-xl  text-base-700'>Super Premium Rooms</p>
//             {/* <p id='innerprice' className='text-xl sm:text-xl innerprice1 opacity-100 transition-all '>₹4,000</p> */}
//           </div>
//         </div>
//         <div id='roomcard' className='relative roomcard flex-auto sm:flex-1 w-full flex justify-center items-end sm:min-w-96 h-80 bg-gray-100 overflow-hidden'>
//           <img className='absolute hover:scale-110 transition-all h-full w-full object-cover' src="/rooms/familysuit/fam1.jpg" alt="" />
//           <div className='bg-white/50 relative font-s w-full flex justify-between sm:flex-row flex-col items-start sm:items-end border-base-500/50 border-t p-4 overflow-hidden backdrop-blur-md'>
//             <div className='w-full h-20 absolute -top-20 right-10 blur-3xl bg-white/50'></div>
//             <p className='font-medium inline text-xl  text-base-700'>Family Suite</p>
//             {/* <p id='innerprice' className='text-xl sm:text-xl innerprice1 opacity-100 transition-all '>₹7,500</p> */}
//           </div>
//         </div>
        
          
//         </div>
//         <h2 className='font-main2 text-5xl text-base-500 '>Amenities</h2>
//         <div className='w-60 h-0.5 bg-base-500 flex justify-center items-center mt-2'>
//             <div className='w-4 h-4 bg-base-500 rotate-45'></div>
//         </div>
//         <div className='flex justify-center w-full flex-wrap px-40 gap-10 my-10 items-stretch'>
//           <div className='flex-1 bg-white rounded-sm p-4 font-s border-base-500 border min-w-80 hover:border-l-4 transition-all'>
//             <p className='font-bold text-2xl tracking-tight mb-4'>Free Wi-Fi</p>
//             <p>Get unlimited access to 24x7 high speed WiFi with all rooms. Never miss out on your work, entertainment or travelogue updates.</p>
//           </div>
//           <div className='flex-1 bg-white rounded-sm p-4 font-s border-base-500 border min-w-80 hover:border-l-4 transition-all '>
//             <p className='font-bold text-2xl tracking-tight mb-4'>Booking On Call</p>
//             <p>You can definitely call the hotel directly</p>
//           </div>
//           <div className='flex-1 bg-white rounded-sm p-4 font-s border-base-500 border min-w-80 hover:border-l-4 transition-all'>
//             <p className='font-bold text-2xl tracking-tight mb-4'>Pickup & Drop</p>
//             <p>Using our airport pickup or drop off service to avoid any scam that may happen along the way from the airport to our hotel at reasonable price.</p>
//           </div>
//           <div className='flex-1 bg-white rounded-sm p-4 font-s border-base-500 border min-w-80 hover:border-l-4 transition-all'>
//             <p className='font-bold text-2xl tracking-tight mb-4'>Doctor On Call</p>
//             <p>We offer our guests with doctor on call services. We can call a doctor on request even at night in case any of the visitors suffers from any medical complications.</p>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Services

import React from 'react'
import { useEffect,useState } from 'react'
const Services = () => {
  useEffect(()=>{
    const scrollButton = document.getElementById("RoomsBtn");
    const targetElement = document.getElementById('Roomspage');
    scrollButton.addEventListener('click', ()=>{
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

  },[])
  const roomCategories = {
    Standard: ['rooms/standard/p1.jpg', 'rooms/standard/p2.jpg', 'rooms/standard/p3.jpg', 'rooms/standard/p4.jpg', 'rooms/standard/p5.jpg', 'rooms/standard/p6.jpg'],
    Premium: ['rooms/premium/nprimum1.jpg','rooms/premium/p1.jpg','rooms/premium/p2.jpg','rooms/premium/p3.jpg','rooms/premium/r1.jpg','rooms/premium/r2.jpg','rooms/premium/r3.jpg','rooms/premium/r4.jpg',],
    SuperPremium: ['rooms/premium/nprimum1.jpg','rooms/premium/p1.jpg','rooms/premium/p2.jpg','rooms/premium/p3.jpg','rooms/premium/r1.jpg','rooms/premium/r2.jpg','rooms/premium/r3.jpg','rooms/premium/r4.jpg',],
    FamilySuite: ['rooms/familysuit/p1.jpg','rooms/familysuit/p2.jpg','rooms/familysuit/p3.jpg','rooms/familysuit/p4.jpg','rooms/familysuit/p5.jpg','rooms/familysuit/p6.jpg','rooms/familysuit/p7.jpg','rooms/familysuit/p8.jpg','rooms/familysuit/p9.jpg','rooms/familysuit/p9.jpg','rooms/familysuit/r11.jpg',],
  };
  const [visibleCategory, setVisibleCategory] = useState(null);

  const showPhotos = (category) => {
    if (category) {
      setVisibleCategory(category);
    } else {
      setVisibleCategory(null);
    }
  
    

  }
  return (
    <div id='Roomspage' className='w-full font-main flex justify-center items-center flex-col py-10 polkaback'>
        <h2 className='font-main2 text-2xl text-base-500 '>Kashi Mantram</h2>
        <h2 className='sm:text-6xl text-4xl px-4 text-base-500 font-main2'>Rooms & Services</h2>
        <div className='w-60 h-0.5 bg-base-500 flex justify-center items-center mt-2'>
            <div className='w-4 h-4 bg-base-500 rotate-45'></div>
        </div>
        <div className='w-full px-10 sm:px-40 flex justify-center items-center flex-wrap gap-10 py-10 text-xl font-s'>
        {/* <div id='standard_rooms'  className=' bg-black/50 w-screen h-screen absolute hidden justify-center items-center' style={{zIndex:999}}>
          <div style={{height:"80%"}} className='w-9/12 bg-white p-8 gap-8 rounded-sm overflow-hidden flex flex-col'>
            <p className='text-4xl font-bold tracking-tight text-base-700 flex justify-between'><p>Standard Rooms</p>  <p onClick={()=>{Show_Photos(-1)}}  className=' text-4xl cursor-pointer'>←</p></p>
            <div className='flex flex-wrap h-full gap-4 overflow-y-scroll example '>
              {standard_rooms.map((imageName, index) => (
                <img className='h-3/4 flex-grow' key={index} src={imageName} alt={imageName.split(".")[0]} />
              ))}
            </div>
          </div>
        </div> */}
        {visibleCategory && (
        <div id={`${visibleCategory}_rooms`} className='bg-black/50 w-screen h-screen absolute hidden sm:flex justify-center items-center' style={{ zIndex: 999 }}>
          <div style={{ height: "80%" }} className='w-9/12 bg-white p-8 gap-8 rounded-sm overflow-hidden flex flex-col'>
            <p className='text-4xl font-bold tracking-tight text-base-700 flex justify-between'>
              <span>{visibleCategory.replace(/([A-Z])/g, ' $1').trim()} Rooms</span>
              <span onClick={() => showPhotos(null)} className='text-4xl cursor-pointer'>←</span>
            </p>
            <div className='flex flex-wrap h-full gap-4 overflow-y-scroll example'>
              {roomCategories[visibleCategory].map((imageName, index) => (
                <img className='h-3/4 flex-grow' key={index} src={imageName} alt={imageName.split(".")[0]} />
              ))}
            </div>
          </div>
        </div>
      )}
        <div onClick={() => showPhotos("Standard")} id='roomcard' className='relative roomcard flex-auto sm:flex-1 w-full flex justify-center items-end sm:min-w-96 h-80 bg-gray-100 overflow-hidden'>
          
          <img className='absolute hover:scale-110 transition-all h-full w-full object-cover' src="out3.jpg" alt="" />
          <div  className='bg-white/50 relative font-s w-full flex justify-between sm:flex-row flex-col items-start sm:items-end border-base-500/50 border-t p-4 overflow-hidden backdrop-blur-md'>
            <div className='w-full h-20 absolute -top-20 right-10 blur-3xl bg-white/50'></div>
            <p className='font-medium inline text-xl  text-base-700'>Standard Rooms</p>
              <div className='absolute h-screen w-screen flex justify-center items-center' style={{zIndex:"999"}}></div>
                <div className='w-3/4 h-3/4 bg-black'></div>
            {/* <p id='innerprice' className='text-xl sm:text-xl innerprice1 opacity-100 transition-all '>₹3,000</p> */}
          </div>
        </div>
        <div onClick={() => showPhotos("Premium")} id='roomcard' className='relative roomcard flex-auto sm:flex-1 w-full flex flex-col justify-end items-end sm:min-w-96 h-80 bg-gray-100 overflow-hidden'>
          <img className='absolute hover:scale-110 transition-all h-full w-full object-cover' src="/rooms/premium/nprimum1.jpg" alt="" />
          <div  className='bg-white/50 relative font-s w-full flex justify-between sm:flex-row flex-col items-start sm:items-end border-base-500/50 border-t p-4 overflow-hidden backdrop-blur-md'>
            <div className='w-full h-20 absolute -top-20 right-10 blur-3xl bg-white/50'></div>
            <p className='font-medium inline text-xl text-base-700'>Premium Rooms</p>
            {/* <p id='innerprice' className='text-xl sm:text-xl innerprice1 opacity-100 transition-all '>₹3,500</p> */}
          </div>
        </div>
        <div onClick={() => showPhotos("SuperPremium")} id='roomcard' className='relative roomcard flex-auto sm:flex-1 w-full flex justify-center items-end sm:min-w-96 h-80 bg-gray-100 overflow-hidden'>
          <img className='absolute hover:scale-110 transition-all h-full w-full object-cover' src="/rooms/spremium/spremium1.jpg" alt="" />
          <div className='bg-white/50 relative font-s w-full flex justify-between sm:flex-row flex-col items-start sm:items-end border-base-500/50 border-t p-4 overflow-hidden backdrop-blur-md'>
            <div className='w-full h-20 absolute -top-20 right-10 blur-3xl bg-white/50'></div>
            <p className='font-medium inline text-xl  text-base-700'>Super Premium Rooms</p>
            {/* <p id='innerprice' className='text-xl sm:text-xl innerprice1 opacity-100 transition-all '>₹4,000</p> */}
          </div>
        </div>
        <div onClick={() => showPhotos("FamilySuite")} id='roomcard' className='relative roomcard flex-auto sm:flex-1 w-full flex justify-center items-end sm:min-w-96 h-80 bg-gray-100 overflow-hidden'>
          <img className='absolute hover:scale-110 transition-all h-full w-full object-cover' src="/rooms/familysuit/fam1.jpg" alt="" />
          <div className='bg-white/50 relative font-s w-full flex justify-between sm:flex-row flex-col items-start sm:items-end border-base-500/50 border-t p-4 overflow-hidden backdrop-blur-md'>
            <div className='w-full h-20 absolute -top-20 right-10 blur-3xl bg-white/50'></div>
            <p className='font-medium inline text-xl  text-base-700'>Family Suite</p>
            {/* <p id='innerprice' className='text-xl sm:text-xl innerprice1 opacity-100 transition-all '>₹7,500</p> */}
          </div>
        </div>
        
          
        </div>
        <h2 className='font-main2 text-5xl text-base-500 '>Amenities</h2>
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