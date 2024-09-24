import React from 'react'
import MenuBarIcon from '../svgComponents/MenuBarIcon'

const Navbar = () => {
  return (
    <nav className='fixed z-20 px-4 sm:px-6 md:px-8 lg:px-11 py-4 w-full ff-humane-semi-bold text-5xl tracking-[3px] flex items-center justify-between'>
        <p className=' top-0 left-0 text-color'>
            AKASH FOLIO
        </p>
        <figure>
            <button type='button' className='p-[14px] rounded-full button-border'>
                <MenuBarIcon className="fill-text"/>
            </button>
        </figure>
        <div className='overlay absolute'>

        </div>
    </nav>
  )
}

export default Navbar