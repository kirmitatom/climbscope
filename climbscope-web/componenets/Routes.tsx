import Image from "next/image";
import Link from "next/link";

const Routes = () => {
  return (
    <section className="flex flex-wrap items-center justify-between py-16 px-[10%]">
      {/* Desktop Content */}
      <div className="max-w-[45%] animate-scrollright hidden lg:block">
        <h2 className="text-6xl font-bold text-dark font-header">
          Discover neew Routes everyday
        </h2>
        <p className="text-xl font-body text-dark my-5 leading-relaxed">
          Explore a curated selection of routes. Connect with
          fellow climbers and find exactly where you want your next adventure.
        </p>
        <Link href="#">
          <button className="px-6 py-3 font-bold text-white bg-dark rounded-lg transition-colors duration-300 hover:bg-white hover:text-black">
            visit interactive map
          </button>
        </Link>
      </div>

      {/* Mobile Content - Hidden on desktop */}
      <div className="w-full flex flex-col items-center text-center lg:hidden">
        <h2 className="text-4xl font-bold text-dark font-header mb-4">
          Discover neew Routes everyday
        </h2>
        <p className="text-lg font-body text-dark mb-5 leading-relaxed">
          Explore a curated selection of climbing routes and indoor gyms.
        </p>
        <Link
          href="/map"
          className="mb-9 px-6 py-3 font-bold text-white bg-dark rounded-lg transition-colors duration-300 hover:bg-white hover:text-black"
        >
          Visit interactive map
        </Link>
      </div>

      {/* Images */}
      <div className="grid grid-cols-2 gap-5 w-full lg:max-w-[45%] animate-scrollleft">
        <div className="relative aspect-square">
          <Image
            src="/routes1.png"
            alt="Climbing gear example 1"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="relative aspect-square">
          <Image
            src="/routes1.png"
            alt="Climbing gear example 2"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="relative aspect-square">
          <Image
            src="/routes1.png"
            alt="Climbing gear example 3"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="relative aspect-square">
          <Image
            src="/routes1.png"
            alt="Climbing gear example 4"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Routes;