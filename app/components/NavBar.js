"use client";  // Ensure this is a client-side component
import { usePathname } from 'next/navigation'; // Hook for client-side navigation
import Link from "next/link";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs"; // Use KindeAuth hook to manage session
import Image from 'next/image';

export default function NavBar() {
  const pathname = usePathname();  // Get current route
  const { isAuthenticated, user } = useKindeAuth(); // Get user info from Kinde

  return (
    <nav className="flex items-center justify-between flex-wrap gap-6 pb-2">
      <div className="flex items-center gap-2 font-bold text-lg">
        <Image src="/logo.png" alt="app logo" width={50} height={50} />
        <span>Blog View</span>
      </div>
      <ul className="flex items-center gap-6">
        <li className={pathname === "/" ? "underline underline-offset-2" : "hover:underline"}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/about" ? "underline underline-offset-2" : "hover:underline"}>
          <Link href="/about">About</Link>
        </li>
        <li className={pathname === "/blogs" ? "underline underline-offset-2" : "hover:underline"}>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className={pathname === "/profile" ? "underline underline-offset-2" : "hover:underline"}>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
      {isAuthenticated && user?.email ? (
        <LogoutLink className="border border-gray-100 rounded-full px-4 py-1">Log out</LogoutLink>
      ) : (
        <div className="flex gap-6 items-center">
          <RegisterLink>Sign up</RegisterLink>
          <LoginLink className="border border-gray-100 rounded-full px-4 py-1">Sign in</LoginLink>
        </div>
      )}
    </nav>
  );
}