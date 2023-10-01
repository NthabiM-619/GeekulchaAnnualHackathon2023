import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=' w-full flex justify-around py-3 bg-black text-white fixed top-0 left-0 right-0 z-20'>
        {/* logo */}
        <div className='flex my-auto'> 
            <span className='h-10 w-10 rounded-full border border-[#779867] text-center text-2xl'>🪴</span>
        </div>

        {/* menu items */}
        <ul className='list-none flex my-auto [&>*]:mx-6'>
            <Link to='/'><a href='#ref' target='blank'>Home</a></Link>
            <li className='hover:text-[#aab18c]'><a href='#About' target='blank'>About</a></li>
            <li className='hover:text-[#aab18c]'><a href='#Services' target='blank'>Services</a></li>
            <li className='hover:text-[#aab18c]'><a href='#Faqs' target='blank'>FAQs</a></li>
        </ul>

        {/* login btns (Buyer ? Seller) */}
        <Link to="/buyers"><button className='rounded-xl px-4 py-3 border-[#779867] border-2'>I Want To Buy</button></Link>
    </nav>
  )
}

export default Navbar