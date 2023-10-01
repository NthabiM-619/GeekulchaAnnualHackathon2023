import React from 'react'

const SellerProfile = () => {
  return (
    <section className="fixed right-0 top-0 h-screen w-3/6 pb-10 overflow-y-scroll bg-white z-10" id="farmer-profile">
    <nav className="flex items-center justify-between p-3.5 shadow-md">
      <div className="flex justify-end relative">
        <img src="https://img.icons8.com/?size=50&id=d3KiNe9m4CBF&format=png" alt="cart-icon" className="h-8 w-8" />
        <span className="absolute block h-5 w-5 rounded-full bg-[#779867] text-center text-sm text-white">2</span>
      </div>
      <button className="">
        <div className="flex justify-center">
          <img src="https://img.icons8.com/?size=100&id=7820&format=png" alt="" className="h-8 w-8" />
        </div>
        <div className="absolute right-4 top-11 z-10 mt-2 w-48 rounded-lg bg-white p-4 opacity-0 shadow-lg hover:opacity-100 [&>*]:my-2">
          <a href="#" className="flex items-center"><img src="https://img.icons8.com/?size=100&id=49&format=png" alt="" className="mr-3 h-4 w-4" />Edit Profile</a>
          <a href="#" className="flex items-center"><img src="https://img.icons8.com/?size=100&id=209&format=png" alt="" className="mr-3 h-4 w-4" />My Wallet</a>
          <a href="#" className="flex items-center"><img src="https://img.icons8.com/?size=48&id=Q1xkcFuVON39&format=png" alt="" className="mr-3 h-4 w-4" />Sign Out</a>
          <a href="#" className="flex items-center text-red-500"><img src="https://img.icons8.com/?size=48&id=99933&format=png" alt="" className="mr-3 h-4 w-4" />Delete Account</a>
        </div>
      </button>
    </nav>

    <article className="relative flex items-center justify-evenly px-5 py-10">
      <div className="w-32 rounded-full border bg-red-500">
        <img src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhcm1lciUyMGhlYWRzaG90fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="farmer.profile.name" className="h-32 w-full rounded-full object-cover" />
      </div>
      <div className="">
        <p className="mb-3 text-2xl text-[#0c0b08]">Riaan Van Der Merwe</p>
        <div className="flex items-center">
          <img src="https://img.icons8.com/?size=160&id=2qLGsEDubHGE&format=png" alt="icon-phone" className="mr-3 h-4 w-4" />
          <p className="text-sm text-gray-600">(+27) 024 679 9082</p>
        </div>
        <div className="flex items-center">
          <img src="https://img.icons8.com/?size=64&id=16222&format=png" alt="icon-phone" className="mr-3 h-4 w-4" />
          <p className="text-sm text-gray-600">15 Years Farming</p>
        </div>
        <div className="flex items-center">
          <img src="https://img.icons8.com/?size=100&id=3723&format=png" alt="icon-phone" className="mr-3 h-4 w-4" />
          <p className="text-sm text-gray-600">Johannesburg, Gauteng</p>
        </div>
      </div>
      <div className="flex text-5xl">
        <p className="mr-2">⭐️</p>
        <p className="text-gray-900">4.5</p>
      </div>
    </article>

    <article className="mx-8 h-fit rounded-3xl bg-[#779867] px-4 pb-4">
      <h1 className="py-5 text-center text-3xl font-semibold text-white">Riaan's Produce</h1>
      <div className="flex gap-2">
        <div className="rounded-3xl bg-white p-4 shadow-md">
          <div className="mb-3 flex items-center justify-between">
            <span className="block text-base">Papaya</span>
            <span className="block rounded-full border border-red-500 px-2 text-xs text-red-500">fruit</span>
          </div>
          <div className="w-full">
            <img src="https://plus.unsplash.com/premium_photo-1678469638473-46277893b981?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNyb3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="" className="h-44 w-48 object-cover" />
          </div>
          <div className="mt-4 flex items-center justify-between font-bold">
            <p className="font-bold">R15</p>
            <button className="rounded-full bg-[#aab18c] px-3 py-2 text-white shadow-md">Add</button>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-4 shadow-md">
          <div className="mb-3 flex items-center justify-between">
            <span className="block text-base">Sunflower</span>
            <span className="block rounded-full border border-gray-500 px-2 text-xs text-gray-500">flower</span>
          </div>
          <div className="w-full">
            <img src="https://images.unsplash.com/photo-1566669086984-077347c1f4bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2VyJTIwJTIwc3VufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="" className="h-44 w-48 object-cover" />
          </div>
          <div className="mt-4 flex items-center justify-between font-bold">
            <p className="font-bold"><strike className="text-red-700">R65</strike> R25</p>
            <button className="rounded-full bg-[#aab18c] px-3 py-2 text-white shadow-md">Add</button>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-4 shadow-md">
          <div className="mb-3 flex items-center justify-between">
            <span className="block text-base">Gabbage</span>
            <span className="block rounded-full border border-green-700 px-2 text-xs text-green-700">Veggie</span>
          </div>
          <div className="w-full">
            <img src="https://images.unsplash.com/photo-1611105637889-3afd7295bdbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FiYmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" className="h-44 w-48 object-cover" />
          </div>
          <div className="mt-4 flex items-center justify-between font-bold">
            <p className="font-bold">R10</p>
            <button className="rounded-full bg-[#aab18c] px-3 py-2 text-white shadow-md">Add</button>
          </div>
        </div>
      </div>
    </article>

    <div className="container mx-auto my-10 pb-4 md:px-6">
      <article className="mb-12 text-center">
        <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

        <div className="grid gap-x-6 text-left max-md:px-8 md:grid-cols-3 lg:gap-x-12">
          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 text-lg font-bold">Maria Smantha</h5>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic.
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                <path fill="currentColor" d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
              </svg>
            </p>
            <ul className="mb-0 flex justify-center">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="text-warning w-5">
                  <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="text-warning w-5">
                  <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="text-warning w-5">
                  <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="text-warning w-5">
                  <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="text-warning w-5">
                  <path fill="currentColor" d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
            </ul>
          </div>
          <div className="mb-12 md:mb-0">
            <h5 className="mb-2 text-lg font-bold">Lisa Cudrow</h5>
            <p className="mb-4">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                <path fill="currentColor" d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
              </svg>
            </p>
            <ul className="mb-0 flex justify-center">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="text-warning w-5">
                  <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="text-warning w-5">
                  <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="text-warning w-5">
                  <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="text-warning w-5">
                  <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="text-warning w-5">
                  <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
            </ul>
          </div>
          <div className="mb-0">
            <h5 className="mb-2 text-lg font-bold">John Smith</h5>
            <p className="mb-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                <path fill="currentColor" d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
              </svg>
            </p>
            <ul className="mb-0 flex justify-center">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="text-warning w-5">
                  <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="text-warning w-5">
                  <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="text-warning w-5">
                  <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="text-warning w-5">
                  <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="text-warning w-5">
                  <path fill="currentColor" d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </section>
  )
}

export default SellerProfile