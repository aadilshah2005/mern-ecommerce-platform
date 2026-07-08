import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-3xl font-extrabold text-emerald-500">
              ShopNest
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              ShopNest is your trusted destination for premium quality products
              at affordable prices. Secure shopping with fast delivery.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-emerald-500 hover:text-black transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-emerald-500 hover:text-black transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-emerald-500 hover:text-black transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-emerald-500 hover:text-black transition flex items-center justify-center"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Customer Support
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-5">Contact</h3>

            <div className="space-y-3 text-sm text-slate-400">
              <p>Mumbai, Maharashtra, India</p>
              <p>support@shopnest.com</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} ShopNest. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-emerald-400 transition">
              Terms
            </a>

            <a href="#" className="hover:text-emerald-400 transition">
              Privacy
            </a>

            <a href="#" className="hover:text-emerald-400 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
