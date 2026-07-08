import React from "react";

function Home() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm">
              New Collection 2026
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
              Shop Smart.
              <br />
              Live Better.
            </h1>

            <p className="text-slate-400 mt-6 text-lg">
              Discover premium products at the best prices. Shop electronics,
              fashion, shoes and much more.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-linear-to-r from-emerald-500 to-cyan-500 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
                Shop Now
              </button>

              <button className="border border-slate-700 px-8 py-3 rounded-xl hover:bg-slate-800 transition">
                Explore
              </button>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl h-96 flex items-center justify-center border border-slate-800">
            <span className="text-3xl text-slate-500">Product Image</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-8">Shop By Category</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {[
            "Electronics",
            "Fashion",
            "Shoes",
            "Beauty",
            "Sports",
            "Furniture",
          ].map((item) => (
            <div
              key={item}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-emerald-500 hover:-translate-y-1 transition cursor-pointer"
            >
              <div className="text-4xl mb-3">📦</div>

              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:scale-105 transition"
            >
              <div className="h-56 bg-slate-800 flex items-center justify-center">
                Product Image
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg">Product Name</h3>

                <p className="text-slate-400 text-sm mt-2">
                  Premium quality product.
                </p>

                <div className="flex justify-between items-center mt-5">
                  <span className="text-emerald-400 font-bold text-xl">
                    ₹999
                  </span>

                  <button className="bg-emerald-500 hover:bg-emerald-600 text-black px-4 py-2 rounded-lg font-semibold transition">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
