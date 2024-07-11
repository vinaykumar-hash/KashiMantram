import React from 'react';

const Testimonials = () => {
  return (
    <div style={{ background: "#F0F0F0" }} className='w-full flex justify-center items-center py-20 flex-col'>
      <div className='font-main flex justify-center items-center flex-col'>
        <h2 className='text-2xl text-base-500 tracking-tight font-s'>Testimonials</h2>
        <h2 className='text-6xl text-base-500 '>What Guest’s Say?</h2>
        <div className='w-60 h-1 bg-base-500 flex justify-center items-center mt-2'>
          <div className='w-5 h-5 bg-base-500 rotate-45'></div>
        </div>
      </div>
      <div className='w-full overflow-x-scroll flex justify-center items-center gap-20 example py-10 px-20 hidescroll'>
        <div className='flex hidescroll overflow-x-scroll' style={{ minWidth: '50%' }}></div> {/* Spacer to center initial content */}
        {['Vishal Aryan', 'John Doe', 'Jane Smith','Vishal Aryan', 'John Doe'].map((name, index) => (
          <div
            key={index}
            className='bg-white flex justify-center items-start flex-col p-10 font-s gap-10 rounded-sm border-base-500 border-l-2 border-r-2'
            style={{ width: '600px', flexShrink: 0 }}
          >
            <div className='flex justify-start items-center gap-10'>
              <div className='w-20 h-20 rounded-full bg-base-500'></div>
              <div>
                <div>``````</div>
                <p className='text-2xl font-bold tracking-tight'>{name}</p>
                <p>-Gobibo</p>
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
