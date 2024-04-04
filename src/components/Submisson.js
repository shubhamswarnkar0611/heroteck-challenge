import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";

const Submission = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, phone, address } = formData;
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="text-white border-2 border-gray-300 rounded-xl backdrop-saturate-150 backdrop-blur-lg bg-white/10 w-[35vw] relative px-16 py-10 shadow-2xl shadow-slate-800">
        <form onSubmit={handleSignUp}>
          <h1 className="text-4xl text-center font-semibold">Submission</h1>
          <div className="relative size-full my-8">
            <input
              className="size-full bg-transparent border-2 border-gray-300 rounded-3xl placeholder:text-white py-2 pr-11 pl-5"
              type="text"
              placeholder="Full Name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <FaUser className="absolute right-5 bottom-1/4" />
          </div>
          <div className="relative size-full my-8">
            <input
              className="size-full bg-transparent border-2 border-gray-300 rounded-3xl placeholder:text-white py-2 pr-11 pl-5"
              type="text"
              id="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <MdEmail className="absolute right-5 bottom-1/4" />
          </div>
          <div className="relative size-full my-8">
            <input
              className="size-full bg-transparent border-2 border-gray-300 rounded-3xl placeholder:text-white py-2 pr-11 pl-5"
              type="number"
              id="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <MdPhone className="absolute right-5 bottom-1/4" />
          </div>
          <div className="relative size-full my-8">
            <input
              className="size-full h-20 bg-transparent border-2 border-gray-300 rounded-3xl placeholder:text-white py-2 pr-11 pl-5"
              type="text"
              id="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <MdLocationPin className="absolute scale-300 right-5 bottom-8" />
          </div>
          <button
            className="py-2 px-5 bg-white text-black font-semibold rounded-full shadow-md hover:bg-orange-400 focus:outline-none focus:ring focus:ring-violet-200 focus:ring-opacity-75 w-full my-8"
            type="submit"
          >
            Submit Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Submission;
