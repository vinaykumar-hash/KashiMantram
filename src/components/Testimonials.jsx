import React from 'react';

const Testimonials = () => {
  return (
    <div style={{ background: "#F0F0F0" }} className=' hidden w-full  justify-center items-center py-20 flex-col'>
      <div className='font-main flex justify-center items-center flex-col'>
        <h2 className='text-2xl text-base-500 tracking-tight font-s'>Testimonials</h2>
        <h2 className='sm:text-6xl text-4xl text-base-500 '>What Guest’s Say?</h2>
        <div className='w-60 h-0.5 bg-base-500 flex justify-center items-center mt-2'>
          <div className='w-4 h-4 bg-base-500 rotate-45'></div>
        </div>
      </div>
      <div className='w-full overflow-x-scroll flex justify-center items-center gap-20 example py-10 px-10 hidescroll'>
        <div className='flex hidescroll overflow-x-scroll' style={{ minWidth: '50%' }}></div> {/* Spacer to center initial content */}
        {['Vishal Aryan', 'Yashi Yadav', 'Vinay Choudhary','Vishal Aryan', 'Sejal Singh'].map((name, index) => (
          <div
            key={index}
            className='sm:w-9/12 w-full bg-white flex justify-center items-center sm:items-start flex-col p-10 font-s gap-10 rounded-sm border-base-500 border-t-2 border-b-2 sm:border-b-0 sm:border-t-0 border-l-0 border-r-0 sm:border-l-2 sm:border-r-2'
            style={{ flexShrink: 0 }}
          >
            <div className='w-full flex justify-start items-center flex-col gap-0 sm:gap-5 sm:flex-row'>
              <div className='flex-1 w-40 sm:w-20 h-40 sm:h-20 rounded-full bg-base-500'></div>
              <div className=' w-full flex gap-4 items-center'>
              <div className='h-20 w-20 bg-black rounded-full overflow-hidden'><img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
              <div className='flex flex-col justify-center'>
                <div>``````</div>
                <p className='text-2xl font-bold tracking-tight justify-self-start'>{name}</p>
                <p>-Gobibo</p>
              </div>
                
              </div>
            </div>
            <div>I had a wonderful experience at Kashi Mantram. Every staff member I encountered, from the valet to the check-in were delightful and eager to help.</div>
          </div>
        ))}
        <div className='flex' style={{ minWidth: '50%' }}></div> {/* Spacer to center initial content */}
      </div>
    </div>
  );
}

export default Testimonials;
