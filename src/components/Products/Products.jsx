import "aos/dist/aos.css";
import React from 'react';
import { FaStar } from 'react-icons/fa6';
import product1 from "../../assets/mobileapp.jpeg";
import assetsmanagment from "../../assets/OurProducts/assetsmanagment.jpeg";
import connectivity from "../../assets/OurProducts/connectivity.jpeg";
import financemanagement from "../../assets/OurProducts/Financemanagment.jpeg";
import social from "../../assets/OurProducts/social.jpeg";



const ProductsData =[
    {
        id:1,
        img: product1,
        title:"HR Solution",
        rating:5,
        aosDelay:200,
    },
    {
        id:2,
        img: financemanagement,
        title:"Finance Solution",
        rating:5,
        aosDelay:250,
    },
    {
        id:3,
        img: assetsmanagment,
        title:"Assests Managment",
        rating:5,
        aosDelay:300,
    },
    {
        id:4,
        img: social,
        title:"Social",
        rating:5,
        aosDelay:200,
    },
    {
        id:4,
        img: connectivity,
        title:"Connectivity",
        rating:5,
        aosDelay:200,
    },
]

const Products = () => {
  return (
    <div id="products" className='mt-14 mb-12 font-serif'>
     <div className='container'>
        {/* header section */}
        <div data-aos="fade-up" className='text-center mb-10 max-w-[600px] mx-auto'>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Our Solution</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'></p>
        </div>

        {/* body section */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-item-center gap-5'>
        {/* card section */}
        {
            ProductsData.map((data)=> (
                <div 
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className='space-y-3'>
                <img src={data.img} alt=''className='h-[220px] w-[150px] object-cover rounded-md'/>
                <div>
                    <h3 data-aos="fade-up" className='font-semibold'>{data.title}</h3>
                    <div  className='flex items-center gap-1'> 
                        <FaStar data-aos="fade-up" className="text-yellow-400" ></FaStar>
                        <span>{data.rating}</span>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
     </div>
    </div>
  )
}

export default Products