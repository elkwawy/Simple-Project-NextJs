import PostDeatils from "@/app/components/PostDeatils";
import { Suspense } from "react";

export const generateMetadata = ({ params }) => {
  const { postId } = params;
  return {
    // title: {
    //   default: `Post ${postId} Details`,
    //   // هذا هو العنوان الافتراضي للصفحة، وسيتم استخدامه في حالة عدم تحديد أي عنوان آخر

    //   template: `Post ${postId} Details | %s`,
    //   // هذا يحدد قالبًا للعناوين، حيث يتم استبدال %s بأي عنوان آخر يتم تحديده في الصفحة

    //   absolute: `Post ${postId} Details | Next App`,
    //   // هذا يحدد عنوانًا ثابتًا لا يتأثر بأي عناوين أخرى مضافة في الصفحة
    // },
    title: `Post ${postId} Details`,
    description: "Post Details Page",
  };
};

export default async function PostPage({ params }) {
  const { postId } = params;

  return (
    <div className=" mt-15 max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
        Post Deatils
      </h2>

      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
          </div>
        }
      >
        <PostDeatils postId={postId} />
      </Suspense>
    </div>
  );
}
