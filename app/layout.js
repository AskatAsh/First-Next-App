import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { AuthProvider } from "./AuthProvider";
import Image from "next/image";
import NavBar from "./components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: '/favicon.png'
  }
};


export default async function RootLayout({ children, currentpath }) {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();
  console.log(currentpath)

  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased p-6`}
        >
          <NavBar />
          {/* <nav className="flex items-center justify-between flex-wrap gap-6 pb-2">
            <div className="flex items-center gap-2 font-bold text-lg">
              <Image src="/logo.png" alt="app logo" width={50} height={50} /><span>Blog View</span>
            </div>
            <ul className="flex items-center gap-6">
              <li className="hover:underline underline-offset-2">
                <Link href="/" className={currentpath === "/" ? "underline underline-offset-2" : "inactive-class"}>Home</Link>
              </li>
              <li className="hover:underline underline-offset-2">
                <Link prefetch={false} href="/about">
                  About
                </Link>
              </li>
              <li className="hover:underline underline-offset-2">
                <Link prefetch={false} href="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="hover:underline underline-offset-2">
                <Link prefetch={false} href="/profile">
                  Profile
                </Link>
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
          </nav> */}
          <hr className="border-gray-800" />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
