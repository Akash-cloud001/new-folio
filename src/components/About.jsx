import React from 'react'
import NameTagOne from './svgComponents/NameTagOne'

const About = () => {
  return (
    <section id="aboutMe" className='about-me h-[200vh] bg-dark '>
      <div className=' max-w-[1400px] mx-auto'>
        <figure className='pt-20 px-4 float-right relative'>
          <NameTagOne />
          <p className='name-tag-one-content absolute text-3xl secondary-neon ff-semibold'>
            About Me 
          </p>
        </figure>
      </div>
    </section>
  )
}

export default About