import React from 'react'

const coursePage = () => {
  return (
    <section className="flex h-screen" id='coursePage'>
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 border w-1/2 p-6">
            <div className="bg-[url('https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60')] bg-right bg-no-repeat"></div>
            <div className="bg-[url('https://media.istockphoto.com/id/547050036/photo/young-couple-in-love-holding-hands.webp?s=1024x1024&w=is&k=20&c=6Oj2FrQwNatsneaj-AcqauX5T2dIDwT4zznRf_SQKo8=')] bg-center bg-no-repeat"></div>
        </div>
        <div className="grid place-items-center text-left px-5 w-1/2">
            <h1 className="">TEACH YOURSELF</h1>
            <p className="">Your Friendly Neighborhood Business</p>
            <p className="">It is importannt that you pt the best in your bussiness. Thats why we give it to you. register for the below to take that step</p>
            <p>Click the button to create a button.</p>
    <button onclick="courseButton()">
        Press me!
    </button>
        </div>
    </section>
  )
}

export default coursePage