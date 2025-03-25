// pages/api/blog.ts
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

interface BlogPost {
  title: string;
  read: string;
  imageUrl: string;
  content: string;
  createdAt: Date;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { title, read, imageUrl, content } = req.body;

    if (!title || !read || !imageUrl || !content) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const blogPost: BlogPost = {
      title,
      read,
      imageUrl,
      content,
      createdAt: new Date(),
    };

    try {
      const client = await clientPromise;
      const db = client.db(); // uses the default database specified in the URI
      const result = await db.collection("posts").insertOne(blogPost);

      // MongoDB automatically generates an _id for the document
      res.status(201).json({ message: "Blog post created", postId: result.insertedId });
    } catch (error) {
      console.error("Error inserting blog post:", error);
      res.status(500).json({ error: "Failed to create blog post" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
