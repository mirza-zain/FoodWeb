import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full h-1/6 flex-1 p-5'>
        <div className='flex flex-row justify-between items-center'>
            <div className='uppercase'>
                <h1 className='text-5xl '>BITE<span className='font-[Mentimun] text-4xl text-peach stroke-2'>Joy</span></h1>
            </div>
            <div>
                <button className='px-6 md:px-12 py-2 border-2 bg-honey border-black rounded-full text-xl md:text-3xl font-[Inter] shadow-bottom-dark'>MENU</button>
            </div>
        </div>
    </header>
  )
}

export default Navbar