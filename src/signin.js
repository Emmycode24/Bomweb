import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import inventory from "./background-call-to-action.jpg"; // your background image

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("✅ Form Submitted", formData);
      alert("Sign In successful (mock submission).");
    }
  };

  return (
    <div className="min-h-screen flex font-[Poppins]">
      {/* Left Banner */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white p-10 z-10"
        >
          <h1 className="text-4xl font-bold mb-4">Welcome Back to BOMify</h1>
          <p className="text-lg leading-relaxed">
            Simplify your Bill of Materials — efficiently and visually.
          </p>
        </motion.div>
        <img
          src={inventory}
          alt="BOMify dashboard"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Right Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full px-8 py-10 bg-white shadow-lg rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-medium hover:text-blue-500"
            >
              Sign up
            </Link>
          </p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`mt-1 block w-full rounded-md border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs flex items-center mt-1">
                  <AlertCircle size={14} className="mr-1" /> {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className={`mt-1 block w-full rounded-md border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:border-blue-500 focus:ring-blue-500 pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-xs flex items-center mt-1">
                  <AlertCircle size={14} className="mr-1" /> {errors.password}
                </p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-2 text-white font-semibold hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;

