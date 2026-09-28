import { useProducts } from "./hooks/useProducts";

function App() {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useProducts();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0b1120] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin mx-auto"></div>

          <p className="text-slate-300 mt-5 text-lg font-medium">
            Loading products...
          </p>

          <p className="text-slate-500 text-sm mt-1">
            Please wait a moment
          </p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-[#0b1120] flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-[#111827] border border-red-500/20 rounded-2xl p-8 text-center shadow-2xl">
          <div className="w-14 h-14 mx-auto rounded-full bg-red-500/10 flex items-center justify-center">
            <span className="text-red-400 text-2xl">!</span>
          </div>

          <h1 className="text-2xl font-bold text-white mt-5">
            Unable to load products
          </h1>

          <p className="text-slate-400 mt-3 text-sm leading-6">
            {error.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
      {/* Top Navigation */}
      <header className="border-b border-slate-800/80 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            
            {/* Logo / Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                <span className="text-white font-bold text-lg">
                  P
                </span>
              </div>

              <div>
                <h1 className="text-lg sm:text-xl font-bold tracking-tight">
                  ProductHub
                </h1>

                <p className="text-xs text-slate-500">
                  Management Dashboard
                </p>
              </div>
            </div>

            {/* API Status */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>

              <span className="text-xs sm:text-sm text-slate-300">
                API Connected
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Page Heading */}
        <section className="mb-8">
          <p className="text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Dashboard Overview
          </p>

          <div className="mt-2 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Product Management
              </h2>

              <p className="text-slate-400 mt-2 max-w-2xl">
                Monitor your product catalog, inventory and product
                information from one place.
              </p>
            </div>

            <div className="text-sm text-slate-500">
              Updated from API
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          
          {/* Total Products */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 hover:border-blue-500/30 transition duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">
                  Total Products
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  {data.total}
                </h3>
              </div>

              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/10 flex items-center justify-center">
                <span className="text-blue-400 text-lg">
                  #
                </span>
              </div>
            </div>

            <p className="text-blue-400 text-xs mt-4">
              Total catalog items
            </p>
          </div>

          {/* Loaded Products */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/30 transition duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">
                  Loaded Products
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  {data.products.length}
                </h3>
              </div>

              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/10 flex items-center justify-center">
                <span className="text-emerald-400 text-lg">
                  ✓
                </span>
              </div>
            </div>

            <p className="text-emerald-400 text-xs mt-4">
              Successfully loaded
            </p>
          </div>

          {/* API */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 hover:border-purple-500/30 transition duration-300 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">
                  API Status
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  Online
                </h3>
              </div>

              <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/10 flex items-center justify-center">
                <span className="text-purple-400 text-lg">
                  ●
                </span>
              </div>
            </div>

            <p className="text-purple-400 text-xs mt-4">
              Data connection active
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section>
          {/* Products Header */}
          <div className="bg-[#111827] border border-slate-800 rounded-t-2xl px-5 sm:px-6 py-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              
              <div>
                <h2 className="text-xl font-bold">
                  Products
                </h2>

                <p className="text-slate-500 text-sm mt-1">
                  Browse your available product catalog
                </p>
              </div>

              {/* Product Count */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:block">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-52 bg-[#0b1120] border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500 transition"
                    />
                  </div>
                </div>

                <div className="px-3 py-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <span className="text-blue-400 text-sm font-medium">
                    {data.products.length} Products
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Cards */}
          <div className="bg-[#0f172a] border-x border-b border-slate-800 rounded-b-2xl p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              
              {data.products.map((product) => {
                const stockStatus =
                  product.stock > 20
                    ? "In Stock"
                    : product.stock > 0
                    ? "Low Stock"
                    : "Out of Stock";

                const stockStyle =
                  product.stock > 20
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    : product.stock > 0
                    ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                    : "bg-red-500/10 text-red-400 border-red-500/20";

                return (
                  <article
                    key={product.id}
                    className="group bg-[#111827] border border-slate-800 rounded-xl p-5 hover:border-slate-600 hover:bg-[#131d2e] transition-all duration-300"
                  >
                    {/* Card Top */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                        ID #{product.id}
                      </span>

                      <span
                        className={`px-2.5 py-1 rounded-full border text-[10px] font-semibold ${stockStyle}`}
                      >
                        {stockStatus}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold mt-4 leading-6 group-hover:text-blue-400 transition">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-sm mt-2 leading-6 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-slate-800 my-5"></div>

                    {/* Product Details */}
                    <div className="space-y-3">
                      <div className="flex justify-between gap-3">
                        <span className="text-slate-500 text-xs">
                          Category
                        </span>

                        <span className="text-slate-300 text-xs capitalize text-right">
                          {product.category}
                        </span>
                      </div>

                      <div className="flex justify-between gap-3">
                        <span className="text-slate-500 text-xs">
                          Brand
                        </span>

                        <span className="text-slate-300 text-xs text-right">
                          {product.brand || "N/A"}
                        </span>
                      </div>

                      <div className="flex justify-between gap-3">
                        <span className="text-slate-500 text-xs">
                          Stock
                        </span>

                        <span className="text-slate-300 text-xs">
                          {product.stock} units
                        </span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mt-5 pt-4 border-t border-slate-800 flex items-end justify-between">
                      <span className="text-slate-500 text-xs">
                        Price
                      </span>

                      <span className="text-xl font-bold text-white">
                        ${product.price}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;