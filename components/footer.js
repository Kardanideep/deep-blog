"use client"
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="body-font shadow-lg">
    <hr className="dark:text-white" />
    <div className="container px-5 py-8 mx-auto flex flex-col sm:flex-row items-center justify-center text-center">
      <a className="flex title-font font-medium items-center justify-center mb-4 sm:mb-0">
        <Image
          src="/logo.png" // Path to your image
          alt="Logo"
          width={70}
          height={70}
          className="rounded-full"
        />
        <span className="ml-3 text-xl">Deep Blogs</span>
      </a>
      <p className="text-sm sm:ml-4">
        © 2024-25 DeepBlog —{' '}
        <a
          href="https://twitter.com/knyttneve"
          className="ml-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          @Deepblog
        </a>
      </p>
    </div>
  </footer>
  
  );
};

export default Footer;
