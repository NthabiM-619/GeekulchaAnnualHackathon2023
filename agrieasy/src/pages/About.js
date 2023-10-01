import React from 'react'

const About = () => {
  return (
    <section className="flex h-screen" id='About'>
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 w-1/2 p-6">
            <div className="bg-[url('https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60')] bg-right bg-no-repeat"></div>
            <div className="bg-[url('https://images.unsplash.com/photo-1626906722163-bd4c03cb3b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGZhcm1pbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60')] bg-center bg-no-repeat"></div>
            <div className="col-span-2 bg-[url('https://images.unsplash.com/photo-1589678722742-037b3d04b3b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHx0cmFjdG9yJTIwZmFybWVyfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60')] rounded-xl bg-cover bg-no-repeat"></div>
        </div>
        <div className="text-left px-5 w-1/2 bg-[#e4eae1] flex flex-col justify-center">
            <div className='flex border w-full'>
            <h1 className="w-3/6 flex my-auto ml-12 text-5xl font-medium">About Us</h1>
            <div className="w-96 h-80 bg-[url('https://images.unsplash.com/photo-1607931042288-0c82960d4afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxmYXJtaW5nfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60')] bg-contain bg-no-repeat -skew-x-8"></div>
            </div>
            <p className="">Our project aims to empower rural communities in South Africa by creating a transformative mobile app. This app will connect farmers, entrepreneurs, and small businesses with valuable resources, markets, and information, fostering economic growth and sustainability. Through innovative features, partnerships, and data-driven insights, we aspire to uplift rural economies, reduce poverty, and create lasting positive change in the lives of those who need it most.</p>
            <div className="mt-10 w-full h-1/3 bg-[url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxmYXJtaW5nfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60')] bg-center bg-no-repeat"></div>
        </div>
    </section>
  )
}

export default About