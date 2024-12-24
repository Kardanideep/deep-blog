import matter from "gray-matter";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import OnThisPage from "@/components/onthispage";
import fs from "fs";
import path from "path";

// Generate static paths (similar to getStaticPaths)
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content"));

  return files.map((filename) => {
    const slug = filename.replace(".md", "");
    return { slug }; // Return the slug to generate static paths
  });
}

// Fetch the data for each blog post dynamically (similar to getStaticProps)
export default async function Page({ params }) {
  try {
    const filepath = path.join(process.cwd(), "content", `${params.slug}.md`);
    const fileContent = fs.readFileSync(filepath, "utf-8");
    const { content, data } = matter(fileContent);

    const processor = unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeDocument, { title: data.title || "Blog Post" })
      .use(rehypeFormat)
      .use(rehypeStringify)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings)
      .use(rehypePrettyCode, {
        theme: "github-dark",
        transformers: [
          transformerCopyButton({
            visibility: "always",
            feedbackDuration: 3000,
          }),
        ],
      });

    const htmlContent = (await processor.process(content)).toString();

    return (
      <div className="max-w-4xl mx-auto p-4 pb-8">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
          &quot;{data.description}&quot;
        </p>
        <div className="flex gap-2">
          <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
          <p className="text-sm text-gray-500 mb-4">{data.date}</p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="prose dark:prose-invert"
        ></div>
        <OnThisPage htmlContent={htmlContent} />
      </div>
    );
  } catch (error) {
    console.error("Error processing markdown file:", error);
    return (
      <div className="text-center text-lg font-bold">
        <p>Error processing the post.</p>
      </div>
    );
  }
}
