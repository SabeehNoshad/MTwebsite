import React, { useState } from 'react';
import crm from "../../assets/OurSuits/crm.png";
import financePlatform from "../../assets/OurSuits/finance (2).png";
import hr from "../../assets/OurSuits/hr.png";
import social from "../../assets/OurSuits/social.png";
import ModalSuits from '../Modal/ModalSuits';


const ProductsData = [
    {
        id:1,
        img:financePlatform,
        title:"Finance Platform",
        description:"The integration of Artificial Intelligence (AI) into finance modules on the web is revolutionizing the way businesses manage their financial operations. This synergy of AI with financial systems brings unprecedented levels of efficiency, accuracy, and strategic insight, transforming traditional financial processes into intelligent, automated workflows. AI-powered finance modules can automate routine tasks such as data entry, reconciliation, and report generation, significantly reducing the time and effort required for these activities and minimizing the risk of human error. Beyond automation, AI enhances financial forecasting and analysis capabilities by processing vast amounts of data at incredible speeds, identifying patterns and trends that human analysts might overlook. Predictive analytics powered by AI can provide businesses with foresight into future financial performance, enabling more informed decision-making and proactive management of financial risks and opportunities.",
    },
    {
        id:2,
        img:crm,
        title:"A CRM/CEM Platform",
        description:" we specialize in developing cutting-edge Customer Relationship Management (CRM) and Customer Experience Management (CEM) software that redefines how businesses engage with their customers. Our CRM solutions are meticulously designed to streamline and enhance every aspect of customer interactions, from the initial contact through to long-term relationship building. By centralizing customer information, our CRM systems provide businesses with a comprehensive view of each customer, enabling personalized and efficient service. Sales teams benefit from automated workflows, lead tracking, and powerful analytics that drive sales performance and close rates. Our CRM software also integrates seamlessly with various communication channels, ensuring that customer interactions are recorded and accessible, facilitating a unified approach to customer service."
    },
    {
        id:3,
        img:hr,
        title:"HR Platform",
        description:"Our HR digital platform revolutionizes the way you manage human resources. By streamlining processes and automating routine tasks, it allows your HR team to focus on strategic initiatives that drive growth. The user-friendly interface empowers employees with easy access to their information, enhancing engagement and satisfaction."
    },
   
    {
        id:4,
        img:social,
        title:"Social Networking",
        description:"Our social networking platform redefines how you connect, share, and engage with your community. Designed to foster meaningful interactions, it provides a seamless and intuitive user experience, allowing you to effortlessly connect with friends, family, and like-minded individuals. "
    },
]

const OurSuits = () => {
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
    <div id='suits'>
      <div className='container font-serif'>
        {/* header section */}
        <div data-aos="fade-up" className='text-center mb-10 max-w-[600px] mx-auto'>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Suite of Digital Products </h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>By identifying the industry standards, we aim to automate businesses via digital experience and people centric innovation</p>
        </div>
        {/* body Section */}
        <div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 place-items-center'
        >
            {ProductsData.map((data)=> (
                <div data-aos="fade-up "className=' rounded-2xl bg-white hover:bg-gray-600 hover:text-white relative shadow-xl duration-high group max-w-[400px]'>
                    <div className='h-[100px] flex justify-center items-center '>
                    <img src={data.img} alt=''
                    className=' max-w-[225px] block-auto transform -translate-y-10 group-hover:scale-105 duration-300 drop-shadow-md '
                    />
                </div>
                {/* detail section  */}
                <div className='px-4 py-4' >
                    <h1 className="text-xl font-bold">{data.title}</h1>
                    <p className='text-gray-500 group-hover:text-white relative duration-300 text-sm line-clamp-2 '>{data.description}</p>
                    <div className='flex justify-end mt-4'>
                    <button
                     onClick={() => openModal(data)}
                      className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'> Read More</button>
                </div>
                </div>
                </div>
            ))}
        </div>
        <ModalSuits isVisible={isModalVisible} onClose={closeModal} data={modalData} />
      </div>
    </div>
  )
}

export default OurSuits
