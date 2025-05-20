import React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login | Chat App",
  description: "Sign in or create an account for Chat App",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${inter.className} min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <h1 className="text-2xl font-bold text-indigo-600">Chat App</h1>
        </div>
        {children}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Chat App. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
