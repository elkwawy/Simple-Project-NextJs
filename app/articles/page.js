import Link from "next/link";

// (SSR) جلب المقالات أثناء كل طلب 
async function getArticles() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // يجبر Next.js على جلب البيانات مع كل طلب (SSR)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const articles = await res.json();
  return articles.slice(0, 12); 
}

// دالة لتوليد تواريخ عشوائية خلال آخر 30 يوم
function getRandomDate() {
  const daysAgo = Math.floor(Math.random() * 30); // عدد أيام عشوائي من 0 إلى 30
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toDateString(); // تحويل التاريخ لصيغة مقروءة
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Latest Articles
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <img
              src={`https://picsum.photos/400/250?random=${article.id}`}
              alt={article.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 space-y-3">
              <h2 className="text-2xl min-h-[60px] font-semibold text-gray-900 dark:text-white">
                {article.title.length > 50
                  ? article.title.substring(0, 22) + "..."
                  : article.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {getRandomDate()}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {article.body.length > 100
                  ? article.body.substring(0, 100) + "..."
                  : article.body}
              </p>

              <Link
                href={`/articles/${article.id}`}
                className="mt-4 inline-block cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
