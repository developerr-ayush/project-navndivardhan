import React from "react";
import { Hero } from "@/components/hero";
import Blog, { BlogPost } from "@/components/blog";
// import blog from "@/data/blog.json";
async function getBlogs() {
  const res = await fetch(
    "https://api-nandivardhan.codestudioshub.com/api/blog/blog-list",
    { cache: "no-cache" }
  );
  const data = await res.json();
  return data.data.results;
}
export default async function contact() {
  const blog: BlogPost[] = await getBlogs();
  return (
    <div>
      <Hero img="/image/blog.jpeg" />
      <div className=" mx-auto px-6 py-20">
        <Blog blogPosts={blog} />
      </div>
    </div>
  );
}
