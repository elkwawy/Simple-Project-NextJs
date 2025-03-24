import Image from "next/image";
import Link from "next/link";

export default function ArticlePage(props) {

    console.log(props.params.id);
    
    const article = {
      id: 1,
      title: "Understanding React Server Components",
      description: "A deep dive into the new React Server Components.",
      image:
        "https://img.atom.com/story_images/visual_images/1706201190-Test_main.png?class=show",
      date: "March 10, 2025",
      content:
        "React Server Components (RSC) are a new paradigm that allows developers to offload rendering work from the client to the server. This means less JavaScript shipped to the browser, improving performance and load times.",
    };

//   const searchParams = useSearchParams();
//   const article = searchParams.get("article");
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        {article.title}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
        {article.date}
      </p>
      <Image
        src={article.image}
        alt={article.title}
        className="w-full h-80 object-cover rounded-lg my-6"
      />

      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        {article.content}
      </p>

      <Link
        href="/articles"
        className="mt-6 inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
      >
        ← Back to Articles
      </Link>
    </div>
  );
}
