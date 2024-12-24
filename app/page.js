"use client"
import Typed from 'typed.js'; 
import React, {useRef, useEffect} from 'react';
import Link from "next/link";
import { buttonVariants } from '@/components/ui/button';

export default function Home() {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Coding', 'Web Development', 'Software Engineering', 'Data Science', 'Machine Learning'],
        typeSpeed: 50,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []); 

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
          Your <span className="font-semibold">Ultimate Guide </span>to  Programming  <br className="hidden lg:block" />In <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Comprehensive coding tutorials and resources to <br className="hidden lg:block" /> kickstart your apps, projects, or programming journey!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
             
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose the plan that suits you best</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Basic Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400"><s>50GB Storage</s></li>
            <li className="text-gray-600 dark:text-gray-400">Basic Support</li>
            <li className="text-gray-600 dark:text-gray-400"><s>Up to 5 Users</s></li>
            <li className="text-gray-600 dark:text-gray-400"><s>Community Access</s></li>
            <li className="text-gray-600 dark:text-gray-400">Weekly Updates</li>
          </ul>
        </div>
      </div>
      {/* Standard Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Bestseller</span>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">50GB Storage</li>
            <li className="text-gray-600 dark:text-gray-400">Priority Support</li>
            <li className="text-gray-600 dark:text-gray-400">Up to 5 Users</li>
            <li className="text-gray-600 dark:text-gray-400">Community Access</li>
            <li className="text-gray-600 dark:text-gray-400">Daily Updates</li>
          </ul>
        </div>
      </div>
      {/* Premium Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$30/month</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">200GB Storage</li>
            <li className="text-gray-600 dark:text-gray-400">24/7 Support</li>
            <li className="text-gray-600 dark:text-gray-400">Unlimited Users</li>
            <li className="text-gray-600 dark:text-gray-400">Community Access</li>
            <li className="text-gray-600 dark:text-gray-400">Real-time Updates</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="py-12 bg-white dark:bg-gray-800">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied customers</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Testimonial 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-900 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"The tutorials on this site are clear, easy to follow, and incredibly helpful. My coding skills have improved significantly!"</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Happy Patel</h3>
          <p className="text-gray-500 dark:text-gray-300">Web Developer, Freelancer</p>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-900 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"The Python tutorials here are a lifesaver! The examples and explanations make complex concepts so easy to understand."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Kashyap Jivani</h3>
          <p className="text-gray-500 dark:text-gray-300">Python Developer, Tech Solutions</p>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-900 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"These CSS tutorials are incredibly helpful! They provide clear examples and efficient solutions to styling challenges."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Riya Kardani</h3>
          <p className="text-gray-500 dark:text-gray-300">Frontend Developer, Creative Studios</p>
        </div>
      </div>

    </div>
  </div>
</section>



<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Blog 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="/css.jpg" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">CSS Tutorial</h3>
            <p className="mt-2 mb-2 text-gray-600 dark:text-gray-400">This is a blog for learning CSS, covering basic to advanced concepts. </p>
            {/* <Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button> */}
            <Link href={`/blogpost/css-tutorial`} className={buttonVariants({ variant: "outline" }) }>Click here</Link>
          </div>
        </div>
      </div>
      {/* Blog 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="/ai.webp" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">ChatGPT vs. Gemini</h3>
            <p className="mt-2 mb-2 text-gray-600 dark:text-gray-400">Comparing the features and capabilities of ChatGPT and Gemini.</p>
            {/* <Button className="m-2" variant="outline" href="/blog-post-2">Read More</Button> */}
            <Link href={`/blogpost/chatgpt-vs-gemini`} className={buttonVariants({ variant: "outline" }) }>Click here</Link>
          </div>
        </div>
      </div>
      {/* Blog 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="/c.jpg" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">C Programming Tutorial</h3>
            <p className="mt-2 mb-2 text-gray-600 dark:text-gray-400">This is a comprehensive tutorial for learning C programming.</p>
            {/* <Button className="m-2" variant="outline" href="/blog-post-3">Read More</Button> */}
            <Link href={`/blogpost/c-programming-tutorial`} className={buttonVariants({ variant: "outline" }) }>Click here</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};
