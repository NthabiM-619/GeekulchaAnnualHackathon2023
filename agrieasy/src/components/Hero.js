import React from 'react'

const Hero = () => {
  return (
    <header className="flex justify-center" id='Home'>
        <div className='text-center mt-36'>
        <h1 className='text-9xl text-[#fbfaf9]'>AgriEase</h1>
        <p className='text-3xl mt-5 text-[#e4eae1]'>Creating a transformative mobile App for Farmers</p>

        <div className='flex w-full justify-center [&>*]:mx-16 [&>*]:w-32 text-white mt-20 [&>*]:p-2'>
          <button className='border rounded-xl'>Become A Farmer</button>
          <button className='bg-[#779867] text-white rounded-xl'>Seller</button>
        </div>
        </div>
    </header>
  )
}

export default Hero 