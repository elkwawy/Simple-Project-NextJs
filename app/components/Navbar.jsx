"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Posts", link: "/posts" },
    { name: "Quotes", link: "/quotes" },
    { name: "Articles", link: "/articles" },
    { name: "Users", link: "/users" },
  ];
  return (
    <nav className="flex justify-between items-center p-4 max-sm sm:mx-20">
      <img
        src="https://img.atom.com/story_images/visual_images/1706201190-Test_main.png?class=show"
        alt=""
        className="w-15 h-9 object-cover rounded-xl"
      />
      <ul className="flex gap-4 text-lg">
        <li>
          <Link
            href={"/"}
            className={`transition duration-300 hover:text-blue-500 ${
              pathname === "/" && "text-blue-500"
            }`}
          >
            Home
          </Link>
        </li>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className={`transition duration-300 hover:text-blue-500 ${
                pathname.includes(item.link) && "text-blue-500"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
