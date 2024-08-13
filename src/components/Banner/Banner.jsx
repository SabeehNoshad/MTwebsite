import "aos/dist/aos.css";
import React from 'react';
import Slider from 'react-slick';
import banner from "../../assets/banner background.png";
import logo from "../../assets/mainBannerLogo.png";
import ImageMobile from "../../assets/mobileicon.png";
import financeImage from "../../assets/OurProducts/Financemanagment.jpeg";

// Simplified data
const BannerImages = [
    {
        id: 1,
        img: ImageMobile,
        title: "Leading Your Digital Journey",
        description: "Miletap transforms businesses with end-to-end digital solutions, blending innovative tech with a human touch to streamline every step of your journey.",
    },
    {
        id: 2,
        img: logo,
        title: "Your Digital MileStone Partner",
        description: "Miletap offers comprehensive digital solutions, assisting companies in reimagining processes and embracing digitization. We focus on creating human-centric solutions, not just technical fixes, and support every aspect of your project from start to finish",
    },
    {
        id: 3,
        img: financeImage,
        title: "Navigating Your Digital Future Together",
        description: "Miletap provides holistic digital solutions that help companies reinvent processes and embrace digitization. We prioritize human-centric solutions over mere technical fixes, guiding your project from conception to completion.",
    },
    
];

const Banner = () => {

        var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div id= "home" className='relative overflow-hidden min-h-[450px] sm:min-h-[550px] bg-gray-100 flex justify-center items-center duration-200'>
            <div>
           
            {/* Simplified background pattern */}
            <div 
            data-aos="fade-up"className='absolute inset-0'>
        <img src={banner} alt="Banner" className='w-full h-full object-cover opacity-30' />
      </div>
           
            <div className='h-[400px] w-[400px] bg-primary/60 absolute -top-1/2 right-0 rounded-2xl rotate-45 -z-9'></div>
            <div  className='h-[400px] w-[400px] bg-primary/60 absolute -top-1/2 left-0 rounded-2xl rotate-45 -z-9'></div>

            <div className='container pb-8 sm:pb-0'>
            {/* Slider */}
            <Slider {...settings}>
              
                
                {BannerImages.map((data) => (
                    <div>
                    <div 
                    data-aos="fade-up"
                    key={data.id}>
                    <div  className='flex justify-center items-center'>
                        <div className='relative overflow-hidden grid grid-cols-1 sm:grid-cols-2 p-4'>
                            {/* Text content */}
                            <div className='flex flex-col justify-center gap-4 text-center sm:text-left'>
                                <h1 className='text-3xl font-bold'>{data.title}</h1>
                                <p className='text-sm'>{data.description}</p>
                            </div>
                            {/* Image section */}
                            <div className='flex justify-center'>
                                <img src={data.img} alt="" className='w-[300px] h-[300px] object-contain' />
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                         ))}
                
                
           </Slider>
           </div>
        </div>
        </div>
    );
};

export default Banner;