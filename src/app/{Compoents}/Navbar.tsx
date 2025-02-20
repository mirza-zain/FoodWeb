import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full h-1/6 p-5'>
        <div className='flex flex-row justify-between items-center'>
          <div>
            <h1 className='text-3xl md:text-5xl '>BITE<span className='font-[Mentimun] text-2xl md:text-4xl text-peach stroke-1 stroke-black'>Joy</span></h1>
          </div>
          <div className='flex justify-center items-center'>
            <i className={"text-2xl md:text-4xl mx-3 " + "ri-shopping-cart-fill"}></i>
            <button className='flex justify-center items-center px-2 md:px-8 py-1 border-2 bg-honey border-black rounded-full text-lg md:text-2xl font-[Inter] font-extralight shadow-bottom-dark'>MENU
              <Image src='/hamburger.png' width={50} height={50} alt='logo' />
            </button>
          </div>
        </div>
    </header>
  )
}

export default Navbar