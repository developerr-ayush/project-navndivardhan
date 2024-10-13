import BlogDetail from "@/components/blog-detail";
import React from "react";
import { notFound } from "next/navigation"; // Import the notFound function
import { BlogPost } from "@/components/blog";

let fetchBlogDetail = async (slug: string) => {
  try {
    let fetchData = await fetch(
      `https://api-nandivardhan.codestudioshub.com/api/blog/blog/${slug}`
    );
    // console.log(fetchData);
    if (!fetchData.ok) {
      // If the response is not ok (e.g., 404), throw an error
      throw new Error(`Error fetching blog: ${fetchData.statusText}`);
    }

    let data = await fetchData.json();
    // console.log(data);
    // console.log("data", data);

    return data.data;
  } catch (error) {
    // Log the error and re-throw it to be handled by the page component
    console.error("Error fetching blog detail:", error);
    throw error; // Re-throw the error to let the page handle it
  }
};

export default async function page({ params }: { params: { slug: string } }) {
  try {
    let blogDetail: BlogPost = await fetchBlogDetail(params?.slug);

    // If no blogDetail is returned, throw to trigger the notFound page
    if (!blogDetail) {
      notFound();
    }

    return (
      <div>
        <BlogDetail blogDetail={blogDetail} />
      </div>
    );
  } catch (error) {
    // If any error occurs (e.g., the blog is not found), trigger the 404 page
    notFound();
  }
}
