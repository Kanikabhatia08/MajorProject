import React from 'react'
import hero from "../assets/hero.jpg";
import sec2 from "../assets/sec2.png";
import ring from "../assets/rings.jpg";
import bracelet from "../assets/bracelets.jpg";
import necklace from "../assets/necklace.jpg";
import earing from "../assets/earings.jpg";
import bgimg from "../assets/bgimg.jpg";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "../components/Testimonial";


import { FaArrowRight } from "react-icons/fa";
import Testimonials from '../components/Testimonial';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-cream  text-brown font-coro pt-20 h-full max-w-full ">

      <div className='m-16'>
        <div className='font-semibold text-center '>
          <h1 className='italic text-5xl'>Bejeweled</h1>
          <h2 className='text-6xl font-medium'>Adorn Yourself in Elegance</h2>
        </div>
        <div className='m-3'>
          <img className='items-center justify-center mx-auto max-w-5xl' src={bgimg}  width="790px"/>
        </div>
        <div className='flex space-x-[23%] items-center justify-center'>
          <p>Make the Beauty of your body with accessories on Bejeweled</p>
          <div className='flex'>
            <p>Shop Now </p>
            <p className='p-1'><FaArrowRight /></p></div>
        </div>
      </div>

      <div className='flex my-28 space-x-[10%] items-center justify-center mx-auto max-w-7xl'>
        <div>
          <img src={sec2} />
        </div>
        <div className='max-w-[45%] -mt-32'>
          <h1 className='text-6xl'>Exploring The Beauty Of Adornments</h1>
          <p>Adorning the beauty of ornaments is an art that involves harmonizing elegance with personal style. Consider the occasion and attire, opting for accessories that seamlessly integrate with your overall look. Embrace balance - pair bold statement pieces with simpler attire and vice versa. Pay attention to color coordination, ensuring your accessories harmonize with your outfit. Layering delicate pieces can add depth, while a focal point, such as a standout necklace or earrings, can elevate the entire ensemble. Ultimately, the key lies in expressing your unique style, using ornaments as a canvas to showcase your individuality and enhance your inherent beauty.</p>
          <NavLink to="/AboutUs" >
          <div className='flex mt-16 text-brown hover:text-lightbrown'>
            
            <p>Read More</p>
            <p className='m-1'><FaArrowRight /></p>
            

          </div>
          </NavLink>

        </div>
      </div>

    <NavLink to="/Products" >
      <div className='max-w-[80%] items-center justify-center mx-auto'>
        <h1 className='text-brown text-6xl text-center m-24'>Catalog</h1>
        <div className='flex gap-4'>
          <div className='space-y-2 hover:scale-125 transition duration-500 cursor-pointer'>
            <h3 className='text-brown text-2xl'>Rings</h3>
            <img src={ring} />
          </div>
          <div className='space-y-2 hover:scale-125 transition duration-500 cursor-pointer'>
            <img src={necklace} />
            <h3 className='text-brown text-2xl'>Necklaces</h3>
          </div>
          <div className='space-y-2 hover:scale-125 transition duration-500 cursor-pointer'>
            <h3 className='text-brown text-2xl'>Earings</h3>
            <img src={earing} />
          </div>
          <div className='space-y-2 hover:scale-125 transition duration-500 cursor-pointer'>
            <img src={bracelet} />
            <h3 className='text-brown text-2xl'>Bracelets</h3>
          </div>

        </div>

      </div>
      </NavLink>

      <div>
        <h1 className='text-6xl mt-40  text-center'>What Our Clients Say</h1>
        <div className='py-10 pb-28'>
          <Testimonials />
        </div>
      </div>

    </div>
  )
}
