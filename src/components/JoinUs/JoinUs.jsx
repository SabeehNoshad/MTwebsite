import React, { useState } from 'react';
import ChatModal from '../ChatModal/ChatModal';
import BannerVideo from './BannerVideo';
import Benefits from './Benefits';
import ExpandableTable from './ExpandableTable'; // Adjust the import path as necessary


const JoinUs = () => {
    const [showChatModal, setShowChatModal] = useState(false);

    const handleShowChatModal = () => setShowChatModal(true);
    const handleCloseChatModal = () => setShowChatModal(false);
  
   
    return (
        

        <div>
        <div id='join-us'>
                <BannerVideo />
            
            <div className='relative overflow-hidden min-h-[450px] sm:min-h-[550px] bg-white flex justify-center items-center duration-200'>
                <div className='container font-serif'>
                    <div data-aos="fade-up" className='text-center mb-10 max-w-[600px] mx-auto'>
                        <h1 data-aos="fade-up" className='text-3xl font-bold'>Life At MileTap</h1>
                        <p>.</p>
                        <p data-aos="fade-up" className='text-xl text-gray-400'>MileTap is one of the leading software solutions companies running successfully for 5-years with a family of 100+ people and continues to expand on a quarterly basis. Our people represent our company; therefore, we employ the best professionals in the industry.</p>
                        <p>.</p>
                        <p data-aos="fade-up" className='text-xl text-gray-400'>Every employee at MileTap is an empowered business manager. We have a long-term commitment to our employees’ careers and a strong focus on training and development. With a great focus on advancement and learning opportunities, work-life balance, and recognition. MileTap is the right place for those with a passion for learning and applying innovation.</p>
                        <p></p>
                    </div>
                </div>
            </div>

            {/* Current openings */}
            <div className='relative overflow-hidden min-h-[450px] sm:min-h-[550px] bg-gray-100 flex flex-col justify-center items-center duration-200'>
                <div className='container'>
                    <div data-aos="fade-up" className='text-center mb-10 max-w-[600px] mx-auto'>
                        <h1 data-aos="fade-up" className='text-3xl font-bold'>Current Openings</h1>
                        <p data-aos="fade-up" className='text-xl text-gray-400'>Join, Grow and Achieve More!</p>
                    </div>
                    <ExpandableTable />
                </div>
                <Benefits onChatButtonClick={handleShowChatModal} />
                <ChatModal show={showChatModal} onClose={handleCloseChatModal} />
               
            </div>
        </div>
        </div>
    );
};

export default JoinUs;
