import React from 'react'

const Navbar = () => {
  return (
    <nav className=' w-full flex justify-around py-3 bg-black text-white'>
        {/* logo */}
        <div className=''> 
            <img className='bg-green-700 h-10 w-10 rounded-full' src='' alt='' loading='lazy' />
        </div>

        {/* menu items */}
        <ul className='list-none flex my-auto [&>*]:mx-6'>
            <li className=''><a href='#Home' target='blank'>Home</a></li>
            <li className=''><a href='#About' target='blank'>About</a></li>
            <li className=''><a href='#Services' target='blank'>Services</a></li>
            <li className=''><a href='#Faqs' target='blank'>FAQs</a></li>
        </ul>

        {/* login btns (Buyer ? Seller) */}
        <button className=' rounded-xl px-2.5'>Buyer</button>
    </nav>
  )
}

export default Navbar