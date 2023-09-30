import React from 'react'

const Services = () => {
  return (
<section className="py-8 border-t-[#e4eae1] border-t-2" id='Services'>
  <h1 className="text-center mt-2 mb-5 text-5xl text-[#779867]">Services Offered</h1>
  
  <div className="w-full flex justify-evenly gap-10 [&>*]:w-96">
  
  <div className="py-3 rounded-xl px-4 border-[#779867]">
      <div className="flex items-center mb-2">
        <img src="https://img.icons8.com/?size=100&id=wsaXI0aea252&format=gif" alt="" loading="" className="shadow-sm shadow-[#779867] rounded-full p-2" />
        <h3 className="ml-5">Service One </h3>
      </div>
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facere quia pariatur, repudiandae sed cumque eos quaerat ipsum necessitatibus assumenda porro quas labore beatae velit accusamus accusantium, dolor dignissimos sequi?</p>
    </div>

    <div className="py-3 rounded-xl px-4 border-[#779867]">
      <div className="flex items-center mb-2">
        <img src="https://img.icons8.com/?size=100&id=L7fD8ebkUJt0&format=gif" alt="" loading="" className="shadow-sm shadow-[#779867] rounded-full p-2" />
        <h3 className="ml-5">Service Three</h3>
      </div>
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facere quia pariatur, repudiandae sed cumque eos quaerat ipsum necessitatibus assumenda porro quas labore beatae velit accusamus accusantium, dolor dignissimos sequi?</p>
    </div>

    <div className="py-3 rounded-xl px-4 border-[#779867]">
      <div className="flex items-center mb-2">
        <img src="https://img.icons8.com/?size=100&id=Wyq9ckwhhDZB&format=gif" alt="" loading="" className="shadow-sm shadow-[#779867] rounded-full p-2" />
        <h3 className="ml-5">Service Two</h3>
      </div>
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facere quia pariatur, repudiandae sed cumque eos quaerat ipsum necessitatibus assumenda porro quas labore beatae velit accusamus accusantium, dolor dignissimos sequi?</p>
    </div>
    </div>

</section>
  )
}

export default Services