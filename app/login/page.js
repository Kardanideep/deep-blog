"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import React, { useState } from "react";
import { redirect } from 'next/navigation'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({
        email: "",
        password: "",
        rememberMe: false,
    })
    redirect("/")
  };

  return (
    <div className="font-sans">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
          {/* Left Section */}
          <div>
            <h2 className="lg:text-5xl text-4xl font-extrabold lg:leading-[55px] ">
              Seamless Login for Exclusive Access
            </h2>
            <p className="text-sm mt-6 ">
             Experience a smooth and user-friendly login process with our thoughtfully designed interface. Quickly and securely access your account with ease.
            </p>
            <p className="text-sm mt-12 ">
              Don't have an account?
              <Link
                href="/singup"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Register here
              </Link>
            </p>
          </div>

          {/* Right Section */}
          <form
            className="max-w-md md:ml-auto w-full"
            onSubmit={handleSubmit}
          >
            <h3 className=" text-3xl font-extrabold mb-8">
              LogIn
            </h3>

            {/* Input Fields */}
            <div className="space-y-4">
              <div>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-gray-100 text-black w-full text-sm  px-4 py-3.5 rounded-md outline-blue-600"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="bg-gray-100 text-black w-full text-sm  px-4 py-3.5 rounded-md outline-blue-600"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {/* Remember Me */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="rememberMe"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm "
                  >
                    Remember me
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="!mt-8">
              <Button
                type="submit"
                className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Log in
              </Button>
            </div>

            {/* Social Login */}
            <div className="space-x-6 flex justify-center mt-8">
              <button type="button" className="border-none outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 512 512">
                  <path fill="#fbbd00" d="..." />
                  <path fill="#0f9d58" d="..." />
                  <path fill="#31aa52" d="..." />
                  <path fill="#3c79e6" d="..." />
                  <path fill="#cf2d48" d="..." />
                  <path fill="#eb4132" d="..." />
                </svg>
              </button>
              <button type="button" className="border-none outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 512 512">
                  <path fill="#1877f2" d="..." />
                  <path fill="#fff" d="..." />
                </svg>
              </button>
              <button type="button" className="border-none outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 22.773 22.773">
                  <path d="..." />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
