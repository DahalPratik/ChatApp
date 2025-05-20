"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      if (!isLogin && username.length < 3) {
        throw new Error("Username must be at least 3 characters");
      }

      console.log(isLogin ? "Login attempt" : "Signup attempt", {
        email,
        password,
        username,
      });

      // Simulate successful login/signup
      localStorage.setItem(
        "user",
        JSON.stringify({
          email,
          username: isLogin ? email.split("@")[0] : username,
          isAuthenticated: true,
        })
      );

      // After successful authentication, redirect to dashboard
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    setLoading(true);
    setError("");

    try {
      // In a real app, this would authenticate with the provider
      console.log(`Authenticating with ${provider}`);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock successful authentication
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: `user@${provider.toLowerCase()}.com`,
          username: `${provider}User`,
          provider: provider,
          isAuthenticated: true,
        })
      );

      // Redirect to dashboard
      router.push("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError(`${provider} authentication failed`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0f13]">
      <div className="max-w-md w-full space-y-8 p-10 bg-[#161921] rounded-xl shadow-lg border border-[#5d4260]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#a8b2c3]">
            {isLogin ? "Login to Chat App" : "Create an Account"}
          </h1>
          <p className="mt-2 text-sm text-[#f0f1f4]/70">
            {isLogin ? "Welcome back!" : "Start chatting with friends"}
          </p>
        </div>

        {error && (
          <div className="bg-[#3d2a36] border border-[#aa839b]/50 text-[#f0f1f4] p-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <div className="flex flex-col space-y-4">
          <button
            onClick={() => handleSocialLogin("Google")}
            disabled={loading}
            className="flex items-center justify-center px-4 py-2 border border-[#5d4260] rounded-md shadow-sm text-sm font-medium 
            text-[#f0f1f4] bg-[#161921] hover:bg-[#212530] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path
                  fill="#4285F4"
                  d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                />
                <path
                  fill="#34A853"
                  d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                />
                <path
                  fill="#FBBC05"
                  d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                />
                <path
                  fill="#EA4335"
                  d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                />
              </g>
            </svg>
            {loading ? "Connecting..." : "Continue with Google"}
          </button>

          <button
            onClick={() => handleSocialLogin("Facebook")}
            disabled={loading}
            className="flex items-center justify-center px-4 py-2 border border-[#5d4260] rounded-md shadow-sm text-sm font-medium 
            text-[#f0f1f4] bg-[#161921] hover:bg-[#212530] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <svg
              className="h-5 w-5 mr-2 text-[#1877F2]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
            </svg>
            {loading ? "Connecting..." : "Continue with Facebook"}
          </button>

          <button
            onClick={() => handleSocialLogin("Twitter")}
            disabled={loading}
            className="flex items-center justify-center px-4 py-2 border border-[#5d4260] rounded-md shadow-sm text-sm font-medium 
            text-[#f0f1f4] bg-[#161921] hover:bg-[#212530] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <svg
              className="h-5 w-5 mr-2 text-[#1DA1F2]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
            {loading ? "Connecting..." : "Continue with Twitter"}
          </button>
        </div>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-[#5d4260]"></div>
          <p className="mx-4 text-sm text-[#a8b2c3]">or</p>
          <div className="flex-1 border-t border-[#5d4260]"></div>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-[#a8b2c3]"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                disabled={loading}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-[#0d0f13] border border-[#5d4260] rounded-md shadow-sm 
                focus:outline-none focus:ring-[#aa839b] focus:border-[#aa839b] text-[#f0f1f4]
                disabled:opacity-70 disabled:cursor-not-allowed"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#a8b2c3]"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              disabled={loading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-[#0d0f13] border border-[#5d4260] rounded-md shadow-sm 
              focus:outline-none focus:ring-[#aa839b] focus:border-[#aa839b] text-[#f0f1f4]
              disabled:opacity-70 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#a8b2c3]"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              disabled={loading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-[#0d0f13] border border-[#5d4260] rounded-md shadow-sm 
              focus:outline-none focus:ring-[#aa839b] focus:border-[#aa839b] text-[#f0f1f4]
              disabled:opacity-70 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium 
              text-[#f0f1f4] bg-[#aa839b] hover:bg-[#aa839b]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 
              focus:ring-[#5d4260] focus:ring-offset-[#0d0f13] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {isLogin ? "Signing in..." : "Creating account..."}
                </>
              ) : isLogin ? (
                "Sign in"
              ) : (
                "Create account"
              )}
            </button>
          </div>
        </form>

        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            disabled={loading}
            className="font-medium text-[#aa839b] hover:text-[#aa839b]/80 cursor-pointer 
    disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 
    hover:scale-105 hover:underline underline-offset-2 px-2 py-1 rounded-sm 
    hover:shadow-sm hover:shadow-[#aa839b]/20"
          >
            {isLogin
              ? "Need an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
