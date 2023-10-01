import React from 'react'

const Faqs = () => {
  return (
    <section id='Faqs' className='pb-8'>
        <div className="container flex flex-col justify-center pb-8 mx-auto md:p-4">
            <p className="p-2 text-sm font-medium text-center uppercase text-[#779867]">How it works</p>
            <h2 className="mb-12 text-4xl font-medium text-[#779867] text-center sm:text-5xl">Frequently Asked Questions</h2>
            <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                <div>
                    <h3 className="font-semibold text-[#779867]">How can I become a farmer?</h3>
                    <p className="mt-1 dark:text-[#000]">While a farming certificate can be beneficial, practical experience is often just as valuable. Agricultural colleges worldwide offer relevant qualifications, and numerous sponsorships and grants exist to support aspiring farmers in pursuing their careers.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-[#779867]">How do I become a partner?</h3>
                    <p className="mt-1 dark:text-[#000]">Although this is primarly for targeted for farmers, you don't need a farm to be a partner in selling crops; many operate as intermediaries. Farmers' clubs are excellent for learning about the farming lifestyle, and apps connecting farmers to customers offer valuable platforms for such partnerships and insights.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-[#779867]">What is farming and what are the different types of farming types?</h3>
                    <p className="mt-1 dark:text-[#000]">Farming is cultivating land for food and resources. Types include subsistence, commercial, organic, intensive, extensive, mixed, vertical, aquaculture, agroforestry, and horticulture. Each serves different purposes and approaches in agriculture.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-[#779867]">What are the problems faced by farmers in South Africa?</h3>
                    <p className="mt-1 dark:text-[#000]">South African farmers face challenges like land reform issues, water scarcity, climate change impacts, and economic pressures. Additionally, there are concerns about access to markets, agricultural education, and addressing social inequalities within the agricultural sector.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faqs
