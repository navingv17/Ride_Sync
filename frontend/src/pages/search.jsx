function Search() {
    return ( 
        <div className="min-h-screen bg-gray-50 px-6 py-12">      {/* Popular Routes */}
      <section className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-800">
          Popular Routes
        </h2>

        <p className="mt-2 text-gray-500">
          Explore frequently travelled destinations
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-green-600">
              Chennai → Coimbatore
            </h3>
            <p className="mt-2 text-gray-500">
              Find comfortable rides
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-green-600">
              Salem → Erode
            </h3>
            <p className="mt-2 text-gray-500">
              Travel together and save
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-green-600">
              Coimbatore → Bengaluru
            </h3>
            <p className="mt-2 text-gray-500">
              Discover available rides
            </p>
          </div>

        </div>
      </section>
</div>
     );
}

export default Search;