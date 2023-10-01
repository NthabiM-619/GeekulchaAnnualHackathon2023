import React from 'react'

const MarketPlace = () => {
  return (
    <section className="w-3/6 bg-white z-10" id="market-feed">
    <nav className="flex items-center justify-between bg-black p-4 shadow-md px-8">
      <div className="flex justify-end">
        <span className="text-xl">🪴</span>
      </div>
      <p className="text-white">Feed</p>
    </nav>

    <article className="mx-auto mt-10 flex max-w-md overflow-hidden rounded-lg bg-[#fbfaf9] shadow-lg relative">
    <div class="w-1/3 bg-cover bg-[url('https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60')]"></div>

      <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-xl font-bold text-[#779867]">Agriculture: 101</h1>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Learn how to be an effective farmer and to sell your crops and make your business grow.</p>

        <div className="item-center mt-2 flex">
          <svg className="h-5 w-5 fill-current text-[#aab18c] dark:text-gray-300" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg className="h-5 w-5 fill-current text-[#aab18c] dark:text-gray-300" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg className="h-5 w-5 fill-current text-[#aab18c] dark:text-gray-300" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg className="h-5 w-5 fill-current text-gray-500" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg className="h-5 w-5 fill-current text-gray-500" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
        </div>

        <div className="item-center mt-3 flex justify-between">
          <h1 className="text-lg font-bold text-[#3a3e28] md:text-xl">R100</h1>
          <button className="transform rounded bg-[#aab18c] px-2 py-1 text-xs font-bold uppercase text-white transition-colors duration-300 hover:bg-[#aab18c] focus:bg-[#aab18c] focus:outline-none dark:focus:bg-[#779867]">Enroll</button>
        </div>
      </div>
     <div className="absolute -bottom-0 right-32 flex">
       <span className="w-6 h-1 bg-gray-400"></span>
       <span className="w-6 h-1 bg-gray-400 mx-2"></span>
       <span className="w-5 h-1 bg-gray-400"></span>
     </div>
    </article>


  <section className="pb-8">
  <h1 className="py-8 text-center text-5xl">Farmer's Market</h1>

  <article className="flex-wrap justify-evenly gap-4 inline-flex">
    <div className="max-w-xs overflow-hidden rounded-lg bg-white p-3 shadow-lg">
      <div className="py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-base font-bold uppercase text-gray-800">Maize</h1>
          <span className="block text-gray-600">⭐️ 2.9</span>
        </div>
        <p className="mt-1 text-sm text-gray-700">Sold by Hanna Stefan</p>
      </div>

      <img className="mt-2 h-48 w-full object-cover" src="https://plus.unsplash.com/premium_photo-1667047165840-803e47970128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFpemV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="fruit or veggie or flower sub" />

      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-lg font-bold text-gray-800">R 29</h1>
        <button className="transform rounded bg-white px-2 py-1 text-base font-semibold uppercase text-[#779867] transition-colors duration-300 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">Purchase</button>
      </div>
    </div>

    <div className="max-w-xs overflow-hidden rounded-lg bg-white p-3 shadow-lg">
      <div className="py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-base font-bold uppercase text-gray-800">Batch of Brocolli</h1>
          <span className="block text-gray-600">⭐️ 3.2</span>
        </div>
        <p className="mt-1 text-sm text-gray-700">Sold by Meeina Minakshe</p>
      </div>

      <img className="mt-2 h-48 w-full object-cover" src="https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="fruit or veggie or flower sub" />

      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-lg font-bold text-gray-800">R 19</h1>
        <button className="transform rounded bg-white px-2 py-1 text-base font-semibold uppercase text-[#779867] transition-colors duration-300 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">Purchase</button>
      </div>
    </div>

    <div className="max-w-xs overflow-hidden rounded-lg bg-white p-3 shadow-lg">
      <div className="py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-base font-bold uppercase text-gray-800">Nectarines</h1>
          <span className="block text-gray-600">⭐️ 4.4</span>
        </div>
        <p className="mt-1 text-sm text-gray-700">Sold by Hana Botho</p>
      </div>

      <img className="mt-2 h-48 w-full object-cover" src="https://images.unsplash.com/photo-1504577089374-ed8ee92673bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVjdGFyaW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="fruit or veggie or flower sub" />

      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-lg font-bold text-gray-800">R 39</h1>
        <button className="transform rounded bg-white px-2 py-1 text-base font-semibold uppercase text-[#779867] transition-colors duration-300 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">Purchase</button>
      </div>
    </div>

    <div className="max-w-xs overflow-hidden rounded-lg bg-white p-3 shadow-lg">
      <div className="py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-base font-bold uppercase text-gray-800">Bag of Grapes</h1>
          <span className="block text-gray-600">⭐️ 1.2</span>
        </div>
        <p className="mt-1 text-sm text-gray-700">Sold by Bathong Wena</p>
      </div>

      <img className="mt-2 h-48 w-full object-cover" src="https://images.unsplash.com/photo-1693500383636-290effa9a73c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhcGVzJTIwZnJ1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="fruit or veggie or flower sub" />

      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-lg font-bold text-gray-800">R 29</h1>
        <button className="transform rounded bg-white px-2 py-1 text-base font-semibold uppercase text-[#779867] transition-colors duration-300 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">Purchase</button>
      </div>
    </div>

     <div className="max-w-xs overflow-hidden rounded-lg bg-white p-3 shadow-lg">
      <div className="py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-base font-bold uppercase text-gray-800">Bag of Grapes</h1>
          <span className="block text-gray-600">⭐️ 1.2</span>
        </div>
        <p className="mt-1 text-sm text-gray-700">Sold by Bathong Wena</p>
      </div>

      <img className="mt-2 h-48 w-full object-cover" src="https://images.unsplash.com/photo-1693500383636-290effa9a73c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhcGVzJTIwZnJ1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="fruit or veggie or flower sub" />

      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-lg font-bold text-gray-800">R 29</h1>
        <button className="transform rounded bg-white px-2 py-1 text-base font-semibold uppercase text-[#779867] transition-colors duration-300 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">Purchase</button>
      </div>
    </div>

    <div className="max-w-xs overflow-hidden rounded-lg bg-white p-3 shadow-lg">
      <div className="py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-base font-bold uppercase text-gray-800">Bag of Grapes</h1>
          <span className="block text-gray-600">⭐️ 1.2</span>
        </div>
        <p className="mt-1 text-sm text-gray-700">Sold by Bathong Wena</p>
      </div>

      <img className="mt-2 h-48 w-full object-cover" src="https://images.unsplash.com/photo-1580854256409-67d3cb710ed0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGx1bXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="fruit or veggie or flower sub" />

      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-lg font-bold text-gray-800">R 29</h1>
        <button className="transform rounded bg-white px-2 py-1 text-base font-semibold uppercase text-[#779867] transition-colors duration-300 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">Purchase</button>
      </div>
    </div>

  </article>
</section>

<div className="flex justify-center pb-6">
  <a href="/" className="mx-1 flex cursor-not-allowed items-center justify-center rounded-md border px-4 py-2 capitalize text-gray-600 rtl:-scale-x-100">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
    </svg>
  </a>

  <a href="/" className="hover mx-1 hidden transform rounded-md border px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 sm:inline"> 1 </a>

  <a href="/" className="hover mx-1 hidden transform rounded-md border px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 sm:inline"> 2 </a>

  <a href="/" className="hover mx-1 hidden transform rounded-md border px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 sm:inline"> ... </a>

  <a href="/" className="hover mx-1 hidden transform rounded-md border px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 sm:inline"> 9 </a>

  <a href="/" className="hover mx-1 hidden transform rounded-md border px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 sm:inline"> 10 </a>

  <a href="/" className="hover mx-1 flex transform items-center justify-center rounded-md border px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
    </svg>
  </a>
</div>
</section>
  )
}

export default MarketPlace