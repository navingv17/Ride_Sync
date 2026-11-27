function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <section className="mx-auto mt-1 max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-800">
          How RideSync Works
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-green-600">
              01. Search
            </h3>
            <p className="mt-3 text-gray-600">
              Find rides matching your route and travel date.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-green-600">
              02. Book
            </h3>
            <p className="mt-3 text-gray-600">
              Choose a ride and request your seats.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-green-600">
              03. Travel
            </h3>
            <p className="mt-3 text-gray-600">
              Connect with your driver and enjoy the journey.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
