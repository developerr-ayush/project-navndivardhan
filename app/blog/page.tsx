import React from "react";
import { Hero } from "@/components/hero";
import Blog from "@/components/blog";
import blog from "@/data/blog.json";
export default function contact() {
  return (
    <div>
      <Hero img="/image/contact.jpeg" />
      <div className=" mx-auto px-6 py-20">
        <Blog blogPosts={blog} />
      </div>
    </div>
  );
}
