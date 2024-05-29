import { connectToDb } from "../../../../lib/utils";
import { Post } from "../../../../lib/models";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Gönderi getirilemedi!");
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    await Post.deleteOne({ slug });
    return NextResponse.json("Gönderi silindi");
  } catch (err) {
    console.log(err);
    throw new Error("Gönderi getirilemedi!");
  }
};
