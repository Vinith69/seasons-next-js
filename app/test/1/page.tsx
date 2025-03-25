// app/page.tsx
import Image from "next/image";
import React from "react";

interface BlogPost {
  _id: string;
  title: string;
  read: string;
  imageUrl: string;
  content: string;
  createdAt: string;
}

async function getBlogPost(id: string): Promise<BlogPost> {
  // Using a relative URL here is acceptable because this code runs on the server.
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/blog/${id}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch blog post");
  }
  return res.json();
}

export default async function Page() {
  const id = "67e2701107ce86c639f8d689";
  let post: BlogPost | null = null;

  try {
    post = await getBlogPost(id);
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="max-w-3xl mx-auto p-4" style={{ whiteSpace: "pre-wrap" }}>
      {post ? (
        <article style={{ whiteSpace: "pre-wrap" }}>
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-600 mb-4">{post.read}</p>
          {post.imageUrl && (
            <Image width={200} height={200} src={post.imageUrl} alt={post.title} className="mb-4 w-full object-cover" />
          )}
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
          <p className="mt-4 text-sm text-gray-500">Created at: {new Date(post.createdAt).toLocaleString()}</p>
        </article>
      ) : (
        <p>Blog post not found.</p>
      )}
    </div>
  );
}
