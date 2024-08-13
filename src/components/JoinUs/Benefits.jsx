import React from 'react';
import bonus from "../../assets/Benefits/bonus.png";
import clock from "../../assets/Benefits/clock (1).png";
import health from "../../assets/Benefits/health.png";


const ContactsData = [
    {
        id: 1,
        title: "Flexible TIme",
        img: clock,
    },
    {
        id: 2,
        title: "Bonus",
        img: bonus,
    },
    {
        id: 3,
        title: "Health Benefits",
        img: health,
    },
];

const Benefits = ({ onChatButtonClick }) => {
  return (
    <div>
      <div className='mt-14 mb-12'>
       {/* heading section  */}
        <div>
        <div data-aos="fade-up" className='text-center mb-10 max-w-[600px] mx-auto'>
                        <h1 data-aos="fade-up" className='text-3xl font-bold'>Benefits</h1>
                        <p data-aos="fade-up" className='text-xl text-gray-400'>We value our employees as our greatest asset, offering benefits that keep them inspired and fulfilled.</p>
                    </div>
                    <div data-aos="fade-up" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-30 place-items-center'>
                    {ContactsData.map((data) => (
                        <div key={data.id} className='rounded-xl group max-w-[400px]'>
                            <div>
                                <img src={data.img} alt='' className='w-[80px] h-[80px] object-contain block-auto transform' />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold py-4">{data.title}</h1>
                              
                               
                            </div>
                        </div>
                    ))}
                      <div className="p-4">
    
    </div>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
