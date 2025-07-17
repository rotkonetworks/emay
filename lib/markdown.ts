import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkHtml from "remark-html"
import remarkGfm from "remark-gfm"

const postsDirectory = path.join(process.cwd(), "content/posts")

export type BlogPost = {
  slug: string
  title: string
  description: string
  author: string
  date: string
  content: string
  readTime: string
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Ensure posts directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, "")
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        // Process markdown content
        const processedContent = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(content)

        // Calculate read time (rough estimate: 200 words per minute)
        const wordCount = content.split(/\s+/).length
        const readTime = Math.ceil(wordCount / 200)

        return {
          slug,
          title: data.title || "Untitled",
          description: data.description || "",
          author: data.author || "emay.me Team",
          date: data.date || new Date().toLocaleDateString(),
          content: processedContent.toString(),
          readTime: `${readTime} min read`,
        }
      }),
  )

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    const processedContent = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(content)

    const wordCount = content.split(/\s+/).length
    const readTime = Math.ceil(wordCount / 200)

    return {
      slug,
      title: data.title || "Untitled",
      description: data.description || "",
      author: data.author || "emay.me Team",
      date: data.date || new Date().toLocaleDateString(),
      content: processedContent.toString(),
      readTime: `${readTime} min read`,
    }
  } catch (error) {
    return null
  }
}
