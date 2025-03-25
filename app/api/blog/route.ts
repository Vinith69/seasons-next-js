// app/api/blog/route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const { title, read, imageUrl, content } = await request.json();

    // Validate required fields
    if (!title || !read || !imageUrl || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const blogPost = {
      title,
      read,
      imageUrl,
      content,
      createdAt: new Date(),
    };

    const client = await clientPromise;
    const db = client.db(); // Uses the default database specified in your URI
    const result = await db.collection("posts").insertOne(blogPost);

    return NextResponse.json({ message: "Blog post created", postId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error("Error inserting blog post:", error);
    return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 });
  }
}
