import React from 'react'
import aboutus from "../assets/aboutus.png"

export default function AboutUs() {
  return (
    <div className='bg-cream  text-brown font-coro pt-20 max-w-full'>
      <div className='flex max-w-[80%] justify-center items-center mx-auto gap-5'>
        <div className='max-w-[40%] mt-16 mr-10 mb-40'>
          <img src={aboutus} alt="aboutus" className="rounded-tl-[28%] rounded-br-[28%]" />
        </div>
        <div className='max-w-[40%] -mt-28'>
          <h1 className='text-5xl m-2'>About Us</h1>
          <p className='m-2 '>
            Bejeweled is essentially a jewellery brand, but hey, we like to do things differently here. 
            How? By doing everything boldly, creatively & passionately and never limiting ourselves! 
            Driven by our ambition we embarked on this journey as a female-led family-run jewellery brand 
            in the summer of 2011, and to this day a touch of summer is part of the Bejeweled all year round. </p>
            <p className='m-2'>As sparkling connectors, we are committed to offering affordable Dutch 
            jewellery design that is accessible and wearable for everyone and we are so 
            proud of the company we are today. Over the years the development of our 
            signature Bejeweled brand has taught us many lessons, all of which have 
            made us even more ambitious than ever before. By learning on every step of our journey, 
            and being inspired by your needs and wishes, we've expanded our collections to 
            include clothing, beauty and lifestyle products, the creative process for which is
            kept entirely in-house. From sketching to (print) design, photo shoots to modelling 
            and everything in between.</p>
        </div>
      </div>

    </div>
  )
}
