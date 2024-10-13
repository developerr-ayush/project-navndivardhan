"use client";

import Image from "next/image";
import GSAP from "./gsap";
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  author: {
    id: number;
    username: string;
  };
  updated_at: string;
  banner: string;
  slug: string;
}

export interface BlogProps {
  blogPosts: BlogPost[];
}

function Blog({ blogPosts }: BlogProps) {
  return (
    <section className=" container mx-auto px-4 py-16">
      <GSAP />
      <h2 className="text-3xl font-bold mb-8 text-center">Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 blog">
        {blogPosts.map((post) => (
          <a
            href={`/blog-detail/${post?.slug}`}
            key={post?.id}
            className="blog-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <Image
              src={post?.banner}
              alt={post?.title}
              width={400}
              height={200}
              className="w-full  object-cover aspect-video"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post?.title}</h3>
              <p className="text-gray-600 mb-4">{post?.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post?.author?.username}</span>
                <span>{post?.updated_at}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Blog;
