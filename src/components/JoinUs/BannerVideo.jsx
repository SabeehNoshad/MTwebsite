import "aos/dist/aos.css";
import React from 'react';
import banner from "../../assets/banner background.png";
import video1 from "../../assets/video1.mp4";

// Simplified data with video sources
const BannerVideos = [
    {
        id: 1,
        videoSrc: video1,
        title: "Work With Us",
        description: "Miletap transforms businesses with end-to-end digital solutions, blending innovative tech with a human touch to streamline every step of your journey.",
    },
];

const BannerVideo = () => {
    const settings = {
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
        <div id="home" className='relative overflow-hidden min-h-[450px] sm:min-h-[550px] bg-gray-100'>
            {/* Background image */}
            <div data-aos="fade-up" className='absolute inset-0'>
                <img src={banner} alt="Banner" className='w-full h-full object-cover opacity-30' />
            </div>

            {/* Fixed background video */}
            <video 
                src={video1} 
                autoPlay
                muted
                loop
                className='absolute inset-0 w-full h-full object-cover opacity-70'>
                Your browser does not support the video tag.
            </video>

            {/* Text content positioned at the bottom */}
            <div className='relative w-full h-full'>
                {BannerVideos.map((data) => (
                    <div key={data.id} className='relative w-full h-full flex items-end justify-center'>
                        {/* Overlay text content */}
                        <div className='absolute bottom-5 w-full p-6 bg-opacity-50 text-center text-white'>
                            <h1 className='text-4xl font-extrabold mb-4'>{data.title}</h1>
                            <p className='font-bold text-lg'>{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BannerVideo;
