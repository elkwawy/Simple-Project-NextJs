import Image from "next/image";
import React from "react";

export default async function PostDeatils({ postId }) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch(`https://dummyjson.com/posts/${postId}`, {
    next: { revalidate: 120 },
  });

  const post = await res.json();

//   if (!post.id)
//     return <p className="text-center text-red-500">Post not found</p>;

  return (
    <div className="space-y-5">
      <Image
        src={`https://ui-avatars.com/api/?name=${post.title}&size=128`}
        alt={post.title}
        className="rounded-lg w-40 "
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {post.title}
      </h1>
      <p className="text-gray-600 dark:text-gray-400">{post.body}</p>
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>
          👍 {post.reactions.likes} | 👎 {post.reactions.dislikes}
        </span>
        <span>👀 {post.views} views</span>
      </div>
    </div>
  );
}
