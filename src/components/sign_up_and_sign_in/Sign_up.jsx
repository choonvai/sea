import React, { useState } from 'react';

const Sign_up = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let inputErrors = {};
    if (!formData.name) inputErrors.name = "Please enter your name.";
    if (!formData.email) inputErrors.email = "Email is required.";
    if (!formData.password) inputErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword)
      inputErrors.confirmPassword = "Passwords do not match.";

    setErrors(inputErrors);
    return Object.keys(inputErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully!", formData);
      // API call or processing logic can go here
    }
  };

  return (
    <div className="container mx-auto my-10 px-6">
      <div className="max-w-xl lg:max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg border border-gray-200 lg:p-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-6">
          Sign Up for Exclusive Travel Deals
        </h2>
        <p className="text-center text-gray-600 mb-6 lg:mb-8">
          Join our travel community and receive the latest offers, destination guides, and special promotions straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email to receive exclusive travel offers"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Create a Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create a secure password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-4 rounded-md text-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Start Your Adventure
            </button>
          </div>

          <p className="text-gray-500 text-center text-sm mt-4">
            By signing up, you agree to our <a href="#" className="text-blue-600 underline">Terms & Conditions</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Sign_up;
