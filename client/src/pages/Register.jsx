import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="h-[calc(100vh-80px)] bg-linear-to-r from-slate-950 via-slate-900 to-black flex items-center justify-center px-5 py-4 overflow-hidden">
      <div className="w-full max-w-6xl h-[75vh] bg-[#0b1020]/80 backdrop-blur-xl border border-slate-700 rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
        
        <div className="hidden lg:flex flex-col justify-center px-12 py-8 bg-linear-to-r from-indigo-600 via-violet-600 to-pink-500 text-white relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm">
              Premium Experience
            </span>

            <h1 className="text-4xl xl:text-5xl font-bold mt-6 leading-tight">
              Create Your
              <br />
              Account
            </h1>

            <p className="mt-5 text-white/80 leading-7">
              Join thousands of developers and explore modern, secure and
              lightning-fast experiences with our platform.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  ✓
                </div>
                <p>Secure Authentication</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  ✓
                </div>
                <p>Fast & Responsive</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  ✓
                </div>
                <p>Modern Dashboard</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bg-[#080b1d] flex items-center justify-center px-10 py-8">
          <div className="w-full max-w-lg">
            <h2 className="text-3xl font-bold text-white">Register</h2>

            <p className="text-slate-400 mt-1">
              Create your account to continue.
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-slate-300 mb-2">Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-12 rounded-xl bg-slate-800/70 border border-slate-700 px-4 text-white placeholder:text-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 rounded-xl bg-slate-800/70 border border-slate-700 px-4 text-white placeholder:text-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">Password</label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-12 rounded-xl bg-slate-800/70 border border-slate-700 px-4 text-white placeholder:text-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition"
                />
              </div>

              <label className="flex items-center gap-3 text-sm text-slate-400">
                <input type="checkbox" className="w-4 h-4 accent-violet-500" />I
                agree to the Terms & Conditions
              </label>

              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-linear-to-r from-indigo-600 via-violet-600 to-pink-500 text-white font-semibold shadow-lg shadow-violet-900/30 hover:scale-[1.02] transition-all duration-300"
              >
                Create Account
              </button>
            </form>

            <p className="text-center text-slate-400 mt-6">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-violet-400 hover:text-pink-400 cursor-pointer transition"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
