"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function NotFound() {
  const pathname = usePathname();
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-purple-600">404</h1>
        <p className="text-xl text-gray-600 mb-6 font-medium">Oops! Page not found</p>
        <Link
          href="/"
          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition font-semibold"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
