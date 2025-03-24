import Link from "next/link";
import { Suspense, use } from "react";
export const metadata = {
  title: "Posts",
  description: "Posts Page",
}
// Fetch Function منفصلة
async function fetchPosts() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch("https://dummyjson.com/posts", {
    next: { revalidate: 120 },
  });
  return res.json();
}

// Component بيستخدم use()
function PostsList() {
  const { posts } = use(fetchPosts());

  return (
    <ul className="grid gap-6">
      {posts.slice(0, 20).map((post) => (
        <li
          key={post.id}
          className="space-y-2 bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
        >
          <Link href={`/posts/${post.id}`}>
            <img
              src={`https://ui-avatars.com/api/?name=${post.title}&size=128`}
              alt={post.title}
              className="rounded-lg w-20 h-20 mb-3"
            />
          </Link>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-3">{post.body}</p>
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span className="cursor-pointer">
              👍 {post.reactions.likes} | 👎 {post.reactions.dislikes}
            </span>
            <span>👀 {post.views} views</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

// Main Page Component
export default function PostsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mt-6">
        Latest Posts
      </h1>
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
          </div>
        }
      >
        <PostsList />
      </Suspense>
    </div>
  );
}
