import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[86vh]">
      <h1 className="text-9xl font-bold text-blue-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-gray-400 mt-2 text-center">
        Oops! It looks like you've taken a wrong turn. Don't worry, you can go
        back to the homepage.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
