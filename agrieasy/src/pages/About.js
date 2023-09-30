import React from 'react'

const About = () => {
  return (
    <section className="flex h-screen" id='About'>
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 border w-1/2 p-6">
            <div className="bg-[url('https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60')] bg-right bg-no-repeat"></div>
            <div className="bg-[url('https://images.unsplash.com/photo-1626906722163-bd4c03cb3b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGZhcm1pbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60')] bg-center bg-no-repeat"></div>
            <div className="col-span-2 bg-[url('https://images.unsplash.com/photo-1589678722742-037b3d04b3b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHx0cmFjdG9yJTIwZmFybWVyfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60')] rounded-xlbg-cover bg-no-repeat"></div>
        </div>
        <div className="grid place-items-center text-left px-5 w-1/2">
            <h1 className="">About Us</h1>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dicta cupiditate? Repellat molestiae ex ut harum modi minima labore nisi saepe amet tempora, exercitationem nesciunt autem nostrum expedita consectetur enim. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur blanditiis commodi esse alias nulla doloremque unde odit aut at. Assumenda harum quam inventore accusantium, autem explicabo fugit ab quo voluptatibus?</p>
        </div>
    </section>
  )
}

export default About