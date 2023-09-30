import React from 'react'

const Faqs = () => {
  return (
    <section id='Faqs'>
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-4">
            <p className="p-2 text-sm font-medium text-center uppercase text-[#779867]">How it works</p>
            <h2 className="mb-12 text-4xl font-medium text-[#779867] text-center sm:text-5xl">Frequently Asked Questions</h2>
            <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                <div>
                    <h3 className="font-semibold text-[#779867]">How can I become a farmer?</h3>
                    <p className="mt-1 dark:text-[#000]">Do I need a certificate in farming to start farming? Which institutions offer  qualifications in farming?Is there sponsors available if one wants to persue a career in farming?</p>
                </div>
                <div>
                    <h3 className="font-semibold text-[#779867]">How do I become a partner?</h3>
                    <p className="mt-1 dark:text-[#000]">Do I need to have a farm to become a partner?, Are farmers clubs that on can engage with,to learn more about farmers lifestyle?</p>
                </div>
                <div>
                    <h3 className="font-semibold text-[#779867]">What is farming and what are the different types of farming types?</h3>
                    <p className="mt-1 dark:text-[#000]">What are the key duties of a farmer?,How do farmers know that the soil is fertile enough to be used to plant vegetables?,
                    Is there a method or a measure of the fertility of the soil?</p>
                </div>
                <div>
                    <h3 className="font-semibold text-[#779867]">What are the problems faced by farmers in Soth africa?</h3>
                    <p className="mt-1 dark:text-[#000]">Does our communities support our local farmers? Is there enough women in farming?, Is our government supporting our farmers?, Are there
                    enough resources allocated to support farmers in our country?</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faqs
