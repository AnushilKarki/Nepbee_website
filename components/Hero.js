import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='lg:flex pt-4 items-center justify-center px-4 lg:px-0'>
      <div className='lg:w-[45%] lg:h-screen lg:translate-y-[20%] '>
        <h1 className='text-2xl lg:text-5xl lg:font-bold font-semibold text-darkblue'>OUR BUSINESS TEAM</h1>
        <p className='lg:pt-5'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45  Contrary to popular belief, 
        Lorem Ipsum is not simply random text. It has roots in a piece 
        of classical Latin literature </p>
        <button className='bg-pinkish lg:mt-7 mt-2 text-sm lg:text-base text-white px-3 py-2 rounded-full hover:bg-pink-600'>LEARN MORE</button>
      </div>

      <div className='lg:w-[55%]'>
        <Image src="/Rectangle2.svg" alt="" width={600} height={600} className="h-[100%] w-[100%] lg:absolute left-0 top-0 -z-30 hidden lg:block" />
        <Image src="/Rectangle1.svg" alt="" width={500} height={500} className="h-[100%] w-[100%] lg:absolute -left-5 top-0 -z-30 hidden lg:block" />
        <Image src="/hero_img.svg" alt="" width={800} height={800} className=" lg:absolute left-[40%] top-[10%] z-10" />
      </div>
    </div>
  )
}

export default Hero