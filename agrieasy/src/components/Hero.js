import React from 'react'

const Hero = () => {
  return (
    <header className="flex justify-center">
        <div className='text-center mt-36'>
        <h1 className='text-9xl text-[#fbfaf9] '>AgriEase</h1>
        <blockquote className='text-md'>Made Easy....</blockquote>
        <p className='text-2xl mt-5'>Lorem jhbd w fj vfaebfhbemfbsejrf. erfjberjhgbs ejrfbjrhb g hserb gnerbhgbaef</p>

        <div className='flex w-full justify-center [&>*]:mx-16 [&>*]:w-32 text-white mt-20 [&>*]:p-4'>
          <button className='border'>Agri Training</button>
          <button className='border'>Seller</button>
        </div>
        </div>
    </header>
  )
}

export default Hero 