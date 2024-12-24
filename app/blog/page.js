import React from 'react';  
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import fs from "fs";
import matter from 'gray-matter';


const dirContent = fs.readdirSync("content", "utf-8");

const blogs = dirContent.map(file=>{
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
    const {data} = matter(fileContent)
    return data
})

const Blog = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 pb-4'>
    <div className="container mx-auto p-4  ">
      {/* Main heading for the blog section */}
      <h1 className="text-4xl font-bold mb-8 text-center">Blogs</h1>
                      
      {/* Grid layout for blog posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{blog.title}</h3>
            <p className="mt-2 mb-2 text-gray-600 dark:text-gray-400">{blog.description}</p>
            <div className="text-sm  mb-4">
                <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
              </div>
            {/* <Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button> */}
            <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" }) }>Click here</Link>
          </div>
        </div>
        ))}
      </div>
    </div>
    </div>
  );
};
export default Blog;

