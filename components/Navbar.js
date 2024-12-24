"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "./theme-btn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true); // State to control sheet visibility


  useEffect(() => {
    setProgress(20);

    setTimeout(() => {
      setProgress(40);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 400);

    setIsOpen(false); // Close the sheet
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 50);
  }, []);

  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <LoadingBar
        color="#933ce6"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between items-center">
       <Image
              src="/logo1.png" // Path to your image
              alt="Logo"
              width={40}
              height={40}
              className="absolute rounded-full" // Position the image inside the SVG container
            />
        <Link href={"/"}>
          <div className="text-lg font-bold pl-14">DeepBlog</div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href="/"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            About
          </Link>
          <div className="flex items-center">
            <Button asChild className="mx-1" variant="outline">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="mx-1" variant="outline">
              <Link href="/singup">Signup</Link>
            </Button>
            <ModeToggle />
          </div>
        </div>

        <div className="md:hidden">
          <span className="mx-2">
            <ModeToggle />
          </span>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">DeepBlog</SheetTitle>
                <SheetDescription asChild>
                  <div className="flex flex-col gap-6">
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About</Link>
                    <div>
                      <Button asChild className="mx-1 text-xs" variant="outline">
                        <Link href="/login">Login</Link>
                      </Button>
                      <Button asChild className="mx-1 text-xs" variant="outline">
                        <Link href="/singup">SignUp</Link>
                      </Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
