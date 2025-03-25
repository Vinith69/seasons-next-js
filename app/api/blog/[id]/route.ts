// app/api/blog/[id]/route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const client = await clientPromise;
    const db = client.db(); // Uses the default database specified in your URI

    const post = await db.collection("posts").findOne({ _id: new ObjectId(id) });
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("Error retrieving blog post:", error);
    return NextResponse.json({ error: "Failed to retrieve blog post" }, { status: 500 });
  }
}
