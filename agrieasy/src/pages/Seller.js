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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., API call or data processing
    console.log('Form Data:', formData);
  };

  return (
    <section className="flex h-screen" id="seller">
      
      <div
        className="mt-8 w-full h-3/3 bg-[url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxmYXJtaW5nfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60')] bg-center bg-no-repeat"
      ></div>
      <div className="grid place-items-center text-left px-4 w-1/2">
        <h1 className="text-9xl text-[#0c0b08]">AgriEase</h1>
        <p className="text-2xl text-[#0c0b08] mt-10 mb-12">Register Your Friendly Neighborhood Business</p>
        <form onSubmit={handleSubmit} className="mt-4">
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
              />
            </div>
            <div className="mb-4">
              <label htmlFor="businessLocation" className="block text-gray-700 text-sm font-bold mb-2">
                Business Location:
              </label>
              <input
                type="text"
                id="businessLocation"
                name="businessLocation"
                value={formData.businessLocation}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
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
              />
            </div>
            <div className="mb-4">
              <label htmlFor="businessAddress" className="block text-gray-700 text-sm font-bold mb-2">
                Business Address:
              </label>
              <input
                type="text"
                id="businessAddress"
                name="businessAddress"
                value={formData.businessAddress}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>
          <button type="submit" className="mt-2 bg-blue-400 text-white px-4 py-2 rounded-full">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Seller;
