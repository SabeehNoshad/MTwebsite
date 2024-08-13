import "aos/dist/aos.css";
import React from 'react';
import Slider from "react-slick";
import userimage from "../../assets/userimage.png";
import amir from "../../assets/UserProfile/amir.jpeg";
import anus from "../../assets/UserProfile/anus.jpeg";
import areej from "../../assets/UserProfile/areej.jpeg";
import bilal from "../../assets/UserProfile/bilal.jpeg";
import fahad from "../../assets/UserProfile/fahad.jpeg";
import javeria from "../../assets/UserProfile/javeria.jpeg";
import naveed from "../../assets/UserProfile/naveed.jpeg";
import nazeer from "../../assets/UserProfile/nazeer.jpeg";
import sabeeh from "../../assets/UserProfile/sabeeh.jpeg";
import waleed from "../../assets/UserProfile/waleed.jpeg";
import yasir from "../../assets/UserProfile/yarsir.jpeg";

const Employeedata = [
    {
        id:1,
        name:"Owais Shaikh",
        designation:"CEO",
        img:userimage,
    },
    {
        id:2,
        name:"Javeria",
        designation:"Sr.Front-End Developer",
        img:javeria,
    },
    {
        id:3,
        name:"Nazeer Ahmed",
        designation:"Front-End Developer",
        img:nazeer,
    },
    {
        id:4,
        name:"Muhhamad Yasir",
        designation:"Jr.Front-End Developer",
        img:yasir,
    },
    {
        id:5,
        name:"Areej Zahid",
        designation:"MERN Developer",
        img:areej,
    },
    {
        id:6,
        name:"Abu Bakar",
        designation:"Sr.MERN Developer",
        img:userimage,
    },
    {
        id:7,
        name:"Fahad",
        designation:"Jr.ASP Dot Net Developer",
        img:fahad,
    },
    {
        id:8,
        name:"Sabeeh Noshad",
        designation:"SQA Team Lead",
        img:sabeeh,
    },
    {
        id:9,
        name:"Rameen",
        designation:"HR Inter",
        img:userimage,
    },
    {
        id:10,
        name:"Anus ALi ",
        designation:"UI/UX Dev Animator",
        img:anus,
    },
    {
        id:11,
        name:"Naveed Ahmed",
        designation:"UI/US Intern",
        img:naveed,
    },
    {
        id:12,
        name:"Waleed Jandran",
        designation:"Jr.Android Dev",
        img:waleed,
    },
    {
        id:13,
        name:"Uzair Pirwani",
        designation:"Sr.Android Developer",
        img:userimage,
    },
    {
        id:14,
        name:"Rida ",
        designation:"Jr.Android Developer",
        img:userimage,
    },
    {
        id:15,
        name:"Bilal Hussain",
        designation:"Mobile  Team Lead",
        img:bilal,
    },
    {
        id:16,
        name:"Amir Naveed Jandran",
        designation:"Web Team Lead/Dev Ops/Asp.net core",
        img:amir,
    },
    
    
    
    
    
    
    
]

const Team = () => {
    var settings ={
        dots:true,
        arrows:false,
        infinite:true,
        speed:500,
        // slidesTOShow:2,
        SlidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:true,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlide:2
                },
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                   
                },  
            },
        ]
    };
  return (
    <div id="team" className='py-10 mt-10 font-serif'>
      <div className='container'>
        {/* header Section */}
        <div data-aos="fade-up" className='text-center mb-10 max-w-[600px] mx-auto'>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Our Team</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Miletap Family</p>
        </div>
        {/* employees card */}
        <div>
        <Slider {...settings}>
            {Employeedata.map((data)=>(
                <div 
                data-aos="fade-up"
                key={data.id}
                className="flex flex-col gap-4 shadow-lg pr-8 px-6 mx-4 rounded-xl">
                    <div className="mb-4">
                    <img src={data.img} alt="" className="rounded-full w-20 h-20 "/>
                    </div>
                    <div className="space-y-2">
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-xs text-gray-500">{data.designation}</p>
                        <h1 className="text-xl font-bold text-black/80">{data.name}</h1>
                    </div>
                    </div>
                </div>
            ))}
        </Slider>
        </div>

      </div>
    </div>
  )
}

export default Team
