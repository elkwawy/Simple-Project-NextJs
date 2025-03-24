// SSG
async function getQuotes() {
  const res = await fetch("https://dummyjson.com/quotes", {
    cache: "force-cache", // فقط build يجعل الفتش يتم وقت الـ
  });

  if (!res.ok) {
    throw new Error("Failed to fetch quotes");
  }

  const { quotes } = await res.json();
  return quotes;
}

export default async function QuotesPage() {
  const quotes = await getQuotes();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mt-6">
        Inspiring Quotes
      </h1>

      <ul className="space-y-6">
        {quotes.map((quote) => (
          <li
            key={quote.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-l-4 border-blue-500"
          >
            <p className="text-lg font-medium text-gray-900 dark:text-white italic">
              "{quote.quote}"
            </p>
            <p className="text-right text-gray-600 dark:text-gray-400 mt-2">
              - {quote.author}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
