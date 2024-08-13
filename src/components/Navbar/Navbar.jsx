import React from 'react';
import logo from "../../assets/mainLogo.png";


const Menu = [
    {
        id:1,
        name:"Home",
        link:"#home",
    },
    {
        id:2,
        name:"Our Solutions",
        link:"#products",
    },
    {
        id:3,
        name:"Our Suits",
        link:"#suits",
    },
    {
        id:4,
        name:"Team",
        link:"#team",
    },
    {
        id:5,
        name:"Contacts",
        link:"#contact",
    },
    {
        id:6,
        name:"About Us",
        link:"#news",
    },
    {
        id:7,
        name:"join Us",
        link:"/join-us",
    },
];

const Navbar = () => {
  return (
    <div className='shadow-md font-serif'>
        {/*upper navbar */}
    <div className='bg-primary/40 py-2'>
        <div className='container flex justify-between items-center'>
            <div>
                <a href='#'
                className='text-gray-500 font-semibold text-2xl sm:text-3xl flex gap-2'>
                    <img src={logo} alt=''
                    className='w-100 h-1 sm:w-100 sm:h-10'/>
                  
                </a>
        </div>
</div>
        </div>
        {/*lower navbar */}
        <div className='flex justify-center bg-gray-300'>
            <ul className='sm:flex hidden items-center gap-4 '>
                {Menu.map((data)=>(
                   <li key={data.id}>
                    <a href={data.link}
                    className='inline-block px-4  hover:text-primary duration-200  scroll-behavior: smooth;'
                    >{data.name}</a>
                   </li> 
                ))}
            </ul>
        </div>
  </div> 
  
  );
};

export default Navbar
