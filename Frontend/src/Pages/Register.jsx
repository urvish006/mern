import React, { useState } from 'react'
import Images from '../assets/images/register.png'

const Register = () => {
  // State for input fields
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  // Handle input change
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <main className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-2 gap-6">
          {/* Left Side - Image */}
          <div className="flex justify-center items-center">
            <img src={Images} alt="Register Illustration" className="w-[400px] rounded-lg shadow-md" />
          </div>

          {/* Right Side - Form */}
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-gray-700 mb-4 border-b-4 border-red-500 pb-2">Register Form</h1>
            <form className="border-t-4 border-red-500 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-600">Username</label>
                <input 
                  type="text" 
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter your username"
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter your email"
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Password</label>
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter your password"
                  autoComplete="off"
                />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                Register
              </button>
            </form>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Register