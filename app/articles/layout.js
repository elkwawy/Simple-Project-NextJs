export const metadata = {
  title: "Articles",
  description: "Articles",
};
export default function ArticlesLayout({ children }) {
  return (
    <div>
      {children}
      <h5 className="font-bold -mt-5 text-gray-900 dark:text-gray-100">
        layout articles
      </h5>
    </div>
  );
}
