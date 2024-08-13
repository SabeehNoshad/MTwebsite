import "aos/dist/aos.css";
import React from 'react';
import events from "../../assets/NewsAndEvents/Events.jpeg";
import teamEvent from "../../assets/NewsAndEvents/Team.jpeg";
import event2 from "../../assets/NewsAndEvents/event2.jpeg";

const NewsAndEvents = () => {
  
  
    return (
      <div id="news" className='relative overflow-hidden min-h-[450px] sm:min-h-[550px] bg-gray-100 flex justify-center items-center duration-200'>
        <div className='text-center mb-10 max-w-[1200px] mx-auto'>
          <h1 data-aos="fade-up" className='text-3xl font-bold mb-8'>News & Events</h1>
          <div className='flex flex-col sm:flex-row gap-4'>
            {/* Big Image */}
            <div className='flex-1 relative'>
              <img src={events} alt="Big Event" className='w-full h-auto object-cover rounded-lg' data-aos="fade-right" />
              <div className='absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-4'>
              <h2 className='text-4xl font-bold mb-2'></h2>
              <p className='text-lg'>Miletap Shines as Silver Sponsor at Job Fair!</p>
            </div>
            </div>
            
            {/* Small Images */}
            <div className='flex flex-col gap-4 flex-1'>
              <img src={teamEvent} alt="Small Event 1"  className='w-full w-[400px] h-[250px] h-auto object-cover rounded-lg' data-aos="fade-up" />
              <img src={event2} alt="Small Event 2" className='w-full h-[200px] w-[400px] h-auto object-cover rounded-lg' data-aos="fade-up" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default NewsAndEvents;