import { CalendarDays, Clock } from "lucide-react";
import { BlogThumbnail } from "../blog-thumbnail";

export default function BlogDetail() {
  return (
    <>
      <BlogThumbnail img="/image/blog-post.jpg" />
      <article className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">
          The Future of Artificial Intelligence: Promises and Perils
        </h1>

        <div className="flex items-center space-x-4 text-muted-foreground mb-6">
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 mr-2" />
            <span>May 15, 2023</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>8 min read</span>
          </div>
        </div>

        <p className="text-xl text-muted-foreground mb-8">
          As we stand on the brink of a new era in technology, artificial
          intelligence promises to revolutionize every aspect of our lives. But
          with great power comes great responsibility. Let&apos;s explore the
          potential benefits and risks of AI.
        </p>

        <div className="prose prose-lg max-w-none">
          <h2>The Promise of AI</h2>
          <p>
            Artificial Intelligence has the potential to solve some of
            humanity&apos;s most pressing challenges. From healthcare to climate
            change, AI-powered solutions are already making a significant
            impact.
          </p>

          <h3>Healthcare Revolution</h3>
          <p>
            AI is transforming healthcare by enabling early disease detection,
            personalized treatment plans, and drug discovery at unprecedented
            speeds.
          </p>

          <h3>Environmental Solutions</h3>
          <p>
            Machine learning algorithms are helping us better understand climate
            patterns, optimize energy consumption, and develop sustainable
            technologies.
          </p>

          <h2>The Perils of AI</h2>
          <p>
            However, the rapid advancement of AI also brings potential risks
            that we must address proactively.
          </p>

          <h3>Job Displacement</h3>
          <p>
            As AI systems become more capable, there&apos;s a risk of widespread
            job displacement across various industries. We need to prepare for
            this shift in the job market.
          </p>

          <h3>Ethical Concerns</h3>
          <p>
            The use of AI in decision-making processes raises important ethical
            questions, especially in areas like criminal justice, lending, and
            hiring.
          </p>

          <h2>Conclusion</h2>
          <p>
            The future of AI is both exciting and challenging. By fostering
            responsible development and thoughtful implementation, we can
            harness the power of AI to create a better world for all.
          </p>
        </div>
      </article>
    </>
  );
}
