import React, { useState } from 'react';


const Seller = () => {
  
  const [formData, setFormData] = useState({
    firstNames: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    businessName: '',
    businessType: '',
    businessLocation: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    alert(`Thank you, ${formData.firstNames}! Your form has been recieved.`)
    // Add logic to handle form submission, e.g., API call or data processing
    console.log('Form Data:', formData);
  };

  return (
    <section className="flex h-screen" id="seller">
      
      <div
        className="mx-6 mt-8 w-3/6 h-3/3 bg-[url('https://images.unsplash.com/photo-1506484381205-f7945653044d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyJTIwc3RhbGx8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60')] bg-center bg-no-repeat contrast-75"
      ></div>
      <div className="text-left px-4 w-3/6 h-3/6 m-auto py2 mx-8">
        <h1 className="text-7xl text-[#0c0b08 font-medium">AgriEase 🪴 </h1>
        <p className="text-2xl text-[#0c0b08] mt-4 mb-4">Let customers come to you!</p>
        <span className='text-sm'>ℹ️ This registration process will be further explored through an email that will allow us to profile you before becoming a seller on the platform.</span>
        <form onSubmit={handleSubmit} className="pt-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="firstNames" className="block text-gray-700 text-sm font-bold mb-2">
                First Names:
              </label>
              <input
                type="text"
                id="firstNames"
                name="firstNames"
                value={formData.firstNames}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                placeholder='John Doe'
              />
            </div>
            <div className="mb-4">
              <label htmlFor="businessLocation" className="block text-gray-700 text-sm font-bold mb-2">
                Business Location:
              </label>
              <input
                type="address"
                id="businessLocation"
                name="businessLocation"
                value={formData.businessLocation}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                placeholder='Gauteng, JHB'
              />
            </div>

            <div className="mb-4">
              <label htmlFor="businessType" className="block text-gray-700 text-sm font-bold mb-2">
                Business Type:
              </label>
              <input
                type="text"
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                placeholder='One Person Companies, Sole Proprietorships, etc'
              />
            </div>
            <div className="mb-4">
              <label htmlFor="businessAddress" className="block text-gray-700 text-sm font-bold mb-2">
                What Do You Want To Sell:
              </label>
              <input
                type="text"
                id="businessAddress"
                name="businessAddress"
                value={formData.businessAddress}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                placeholder='Vegetables, Fruits, Both?'
              />
            </div>
          </div>
          <button type="submit" className="mt-6 bg-[#779867] text-white px-4 py-2 rounded-lg hover:bg-[#aab18c]">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Seller;
