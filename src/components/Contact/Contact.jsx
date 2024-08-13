import React, { useState } from 'react';
import banner from "../../assets/banner background.png";
import call from "../../assets/Contact/call.png";
import clock from "../../assets/Contact/clock.png";
import support from "../../assets/Contact/support.png";
import BackToTopButton from '../BackToTop/BackToTopButton';
import Modal from '../Modal/Modal'; // Import the Modal component

const ContactsData = [
    {
        id: 1,
        title: "Contact Us",
        description: "Reach out to us",
        heading:"Pakistan: ",
        heading2:"USA: ",
        button: "For more Details",
        address:" 18/A,SOUTHPARK Avenue DHA Phase 2 Ext,Karachi,Pakistan ",
        address2:" 1309 Cofeen Avenue STE,Sheridan,WY,82801,USA Czechia: Prague Cayman Island",
        img: call,
    },
    {
        id: 2,
        title: "Call Us",
        description: "",
        button: "Call Now",
        heading: "UAE: ",
        heading2:"USA: ",
        heading3:"UK",
        address:" +971-54-445-3998",
        address2:" +1-3076-456-4569",
        address3:" +44-779-917-8855",
        img: support,
    },
    {
        id: 3,
        title: "Partner With Us",
        description: "Let's Innovate Together",
        button: "Find More",
        address:"Email: info@miletap.com",
        img: clock,
    },
];

const Contact = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState(null);

    const openModal = (data) => {
        setModalData(data);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setModalData(null);
    };

    return (
        <div id="contact font-serif">
        <div  className='relative overflow-hidden min-h-[450px] sm:min-h-[550px] bg-gray-300 flex justify-center items-center duration-200'>
        <div 
            data-aos="fade-up"className='absolute inset-0'>
        <img src={banner} alt="Banner" className='w-full h-full object-cover opacity-30' />
      </div>
            <div className='container'>
                <div data-aos="fade-up" className='text-center mb-10 max-w-[600px] mx-auto'>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Contact Us</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-600'>Contact our tech professionals, and together let's lead the world towards digital disruption via multiple digital modes of communication and implementation techniques.</p>
                </div>
                <div data-aos="fade-up" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 place-items-center'>
                    {ContactsData.map((data) => (
                        <div key={data.id} className='rounded-xl group max-w-[400px]'>
                            <div>
                                <img src={data.img} alt='' className='w-[80px] h-[80px] object-contain block-auto transform' />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">{data.title}</h1>
                                <p className='text-gray-500 hover:text-white relative duration-300 text-sm line-clamp-2'>{data.description}</p>
                                <button
                                    onClick={() => openModal(data)}
                                    className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                                >
                                    {data.button}
                                </button>
                            </div>
                        </div>
                    ))}
<BackToTopButton />
                </div>
               
                <Modal isVisible={isModalVisible} onClose={closeModal} data={modalData} />
              
            </div>
         
        </div>
     
        </div>
    );
};

export default Contact;