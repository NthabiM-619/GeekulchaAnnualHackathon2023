import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <header className="flex justify-center" id='Home'>
        <div className='text-center mt-36'>
        <h1 className='text-9xl text-[#fbfaf9]'>Agri-Ease</h1>
        <p className='text-3xl mt-5 text-[#e4eae1]'>Creating a transformative mobile App for Farmers</p>

        <div className='flex w-full justify-center [&>*]:mx-16 text-white items-center mt-20 tracking-wide'>
          <button className='border rounded-xl p-2 w-32'>Become A Farmer</button>
          <Link to="/seller"><button className='bg-[#779867] text-white rounded-xl w-32 py-5 font-bold'>Seller</button></Link>
        </div>
        </div>
    </header>
  )
}

export default Hero