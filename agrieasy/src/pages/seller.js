import React, { useState } from 'react';

const Seller = () => {
  const [formData, setFormData] = useState({
    firstName: '',
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
     
      <div className="grid grid-cols-2 gap-y-4 gap-x-2 border w-1/2 p-6">
            <div className="bg-[url('https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60')] bg-right bg-no-repeat"></div>
            <div className="bg-[url('https://media.istockphoto.com/id/547050036/photo/young-couple-in-love-holding-hands.webp?s=1024x1024&w=is&k=20&c=6Oj2FrQwNatsneaj-AcqauX5T2dIDwT4zznRf_SQKo8=')] bg-center bg-no-repeat"></div>
        </div>
      <div className="grid place-items-center text-left px-5 w-1/2">
        <h1 className="">Join The Winning Team</h1>
        <p className="">Register Your Friendly Neighborhood Business</p>

        
        <form onSubmit={handleSubmit} className="mt-4">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <label htmlFor="businessName">Business Name:</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
          />

          <label htmlFor="businessType">Business Type:</label>
          <input
            type="text"
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            required
          />

          <label htmlFor="businessLocation">Business Location:</label>
          <input
            type="text"
            id="businessLocation"
            name="businessLocation"
            value={formData.businessLocation}
            onChange={handleChange}
            required
          />

          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Seller;