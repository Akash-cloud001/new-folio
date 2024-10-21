import React from 'react'

const Footer = () => {
  return (
    <section className='md:h-[70vh] lg:h-[80vh] overflow-hidden w-full bg-light relative'>
        <p className='pt-0 mt-0 2xl:-mt-20 text-[40vw] lg:text-[52vh] xl:text-[64vh] 2xl:text-[72vh] ff-humane-semi-bold tracking-wider text-center text-dark-color'>
            THANK YOU
        </p>
        <p className='absolute left-1/2 -translate-x-1/2 bottom-3 sm:bottom-10 text-xs sm:text-lg lg:text-xl ff-regular tracking-wide opacity-70 text-center w-screen'>
            DESIGNED & BUILD BY AKASH PARMAR © ALL COPYRIGHTS RESERVED 2024
        </p>
    </section>
  )
}

export default Footer