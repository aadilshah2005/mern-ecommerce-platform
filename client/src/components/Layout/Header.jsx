import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-extrabold tracking-wide text-emerald-500 cursor-pointer">
              ShopNest
            </h1>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-slate-200 font-medium">
            <Link to="/" className="hover:text-emerald-400 transition">
              Home
            </Link>

            <Link to="/products" className="hover:text-emerald-400 transition">
              Products
            </Link>

            <Link
              to="/categories"
              className="hover:text-emerald-400 transition"
            >
              Categories
            </Link>

            <Link to="/about" className="hover:text-emerald-400 transition">
              About
            </Link>

            <Link to="/contact" className="hover:text-emerald-400 transition">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-slate-900 border border-slate-700 rounded-full py-2 pl-11 pr-4 text-white placeholder:text-slate-400 outline-none focus:border-emerald-500"
              />

              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <div className="relative group">
              <button className="text-slate-200 hover:text-emerald-400 transition">
                <FiUser size={22} />
              </button>

              {/* Popup */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden flex flex-col">
                <Link
                  to="/register"
                  className="block w-full px-5 py-3 text-left text-slate-300 hover:bg-emerald-500 hover:text-black transition"
                >
                  Register
                </Link>

                <Link
                  to="/login"
                  className="block w-full px-5 py-3 text-left text-slate-300 hover:bg-emerald-500 hover:text-black transition"
                >
                  Login
                </Link>

                <button className="w-full text-left px-5 py-3 text-red-400 hover:bg-red-500 hover:text-white transition">
                  Logout
                </button>
              </div>
            </div>

            <button className="relative text-slate-200 hover:text-emerald-400 transition">
              <FiShoppingCart size={22} />

              <span className="absolute -top-2 -right-2 bg-emerald-500 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-slate-800 py-5">
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-full py-2 pl-10 pr-4 text-white outline-none"
                />

                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <div className="flex flex-col gap-4 text-slate-200 font-medium">
              <a href="/">Home</a>
              <a href="#">Products</a>
              <a href="#">Categories</a>
              <a href="/about">About</a>
              <a href="">Contact</a>

              <hr className="border-slate-700" />

              <a href="#" className="flex items-center gap-2">
                <FiUser />
                Login
              </a>

              <a href="#" className="flex items-center gap-2">
                <FiShoppingCart />
                Cart
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
