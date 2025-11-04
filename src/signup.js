import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8 font-inter">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sm:mx-auto sm:w-full sm:max-w-md text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Join{" "}
          <span className="text-blue-600 font-medium">BOMify</span> to simplify your product management.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-10 sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="bg-white py-10 px-8 shadow-xl rounded-2xl sm:px-10">
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="block w-full rounded-md border border-gray-300 text-lg px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="block w-full rounded-md border border-gray-300 text-lg px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="Create a strong password"
                className="block w-full rounded-md border border-gray-300 text-lg px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-3 text-lg text-white font-semibold hover:bg-blue-700 shadow-sm transition"
            >
              Sign Up
            </button>
          </form>

          {/* Link to Sign In */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;

