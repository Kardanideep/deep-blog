"use client"
import Link from "next/link";
import React, { useState } from "react";
import { redirect } from 'next/navigation'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const [inputValue, setInputValue] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setFormData({
        name: "",
        email: "",
        password: "",
        rememberMe: false,
    })
    setInputValue(true)
    redirect("/")
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:h-screen flex items-center ">
      <div className="grid md:grid-cols-3 items-center rounded-xl overflow-hidden shadow  border border-white-300 ">
        {/* Sidebar */}
        <div className="flex h-full flex-col justify-center space-y-16 p-6 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
          <div>
            <h4 className="text-lg font-semibold">Create Your Account</h4>
            <p className="mt-3 text-sm">
              Welcome to our registration page! Get started by creating your account.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Simple & Secure Registration</h4>
            <p className="mt-3 text-sm">
              Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.
            </p>
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="md:col-span-2 w-full p-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold">Create an account</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Id
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                placeholder="Enter password"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="remember-me" className="text-sm">
                I accept the{" "}
                <a href="#" className="font-semibold underline">
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-gray-700 text-white font-semibold hover:bg-gray-800"
            >
              Create an account
            </button>
          </div>
          <p className="text-center mt-6 text-sm">
            Already have an account?
            <Link href="/login">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

