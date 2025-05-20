import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-600">Chat App</h1>
          </div>
          <nav>
            <Link
              href="/login"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              Sign In
            </Link>
          </nav>
        </header>

        <main className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6 mt-10 md:mt-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Connect with friends in real-time
            </h2>
            <p className="text-xl text-gray-600">
              A simple, secure way to chat with friends, family, and colleagues.
              Fast, reliable, and designed with privacy in mind.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/login"
                className="px-6 py-3 text-center rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 text-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-80 bg-gray-100 rounded-lg flex items-center justify-center">
              {/* Replace with your actual chat app preview image */}
              <div className="text-gray-400 text-center p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <p>Chat Interface Preview</p>
              </div>
            </div>
          </div>
        </main>

        <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-indigo-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Messaging</h3>
            <p className="text-gray-600">
              End-to-end encryption keeps your conversations private and secure.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-indigo-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Chat</h3>
            <p className="text-gray-600">
              Instant messaging with real-time notifications and typing
              indicators.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-indigo-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Completely Free</h3>
            <p className="text-gray-600">
              No subscription fees or hidden costs. Chat with anyone, anywhere.
            </p>
          </div>
        </section>

        <footer className="mt-24 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Chat App. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
