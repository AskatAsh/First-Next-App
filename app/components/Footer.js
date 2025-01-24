'use client';
import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-center py-6 border-t border-gray-500 mt-10">
      <ul className="flex items-center justify-center gap-6 flex-wrap pb-8">
        <li className="hover:underline underline-offset-2">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline underline-offset-2">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:underline underline-offset-2">
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className="hover:underline underline-offset-2">
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
      <div className="max-w-3xl mx-auto border-t border-gray-800 pt-4 flex items-center justify-center md:justify-between flex-wrap gap-6 text-center">
        <p>&copy;2025, All rights reserved by Blog View</p>
        <a href="#top">
          Back to Top
        </a>
      </div>
    </div>
  );
}
