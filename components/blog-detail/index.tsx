import { CalendarDays } from "lucide-react";
import { BlogThumbnail } from "../blog-thumbnail";
import { BlogPost } from "@/components/blog";

export default async function BlogDetail({
  blogDetail,
}: {
  blogDetail: BlogPost;
}) {
  return (
    <>
      <BlogThumbnail img={blogDetail.banner} />
      <article className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{blogDetail?.title}</h1>

        <div className="flex items-center space-x-4 text-muted-foreground mb-6">
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 mr-2" />
            <span>{blogDetail?.updated_at}</span>
          </div>
          {/* <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>8 min read</span>
          </div> */}
        </div>

        <p className="text-xl text-muted-foreground mb-8">
          {blogDetail?.description}
        </p>

        {blogDetail?.content ? (
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: blogDetail.content,
            }}
          />
        ) : (
          <p>Content is not available</p>
        )}
      </article>
    </>
  );
}
