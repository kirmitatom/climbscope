import Image from "next/image";
import Link from "next/link";

const Routes = () => {
  return (
    <section id="Marketplace" className="flex flex-wrap items-center justify-between py-16 px-[10%]">
      {/* Desktop Content */}
      <div className="max-w-[45%] animate-scrollright hidden lg:block">
        <h2 className="text-6xl font-bold text-dark font-header">
          Discover the Marketplace
        </h2>
        <p className="text-xl font-body text-dark my-5 leading-relaxed">
          Explore a curated selection of climbing gear and equipment. Connect with
          fellow climbers and find exactly what you need for your next adventure.
        </p>
        <Link
          href="/Marketplace"
          className="inline-block mt-5 px-8 py-4 bg-dark text-white no-underline rounded-full text-base transition-colors duration-300 hover:bg-primary"
        >
          Visit Marketplace
        </Link>
      </div>

      {/* Mobile Content - Hidden on desktop */}
      <div className="w-full flex flex-col items-center text-center lg:hidden">
        <h2 className="text-4xl font-bold text-dark font-header mb-4">
          Discover the Marketplace
        </h2>
        <p className="text-lg font-body text-dark mb-5 leading-relaxed">
          Explore a curated selection of climbing gear and equipment.
        </p>
        <Link
          href="/Marketplace"
          className="px-6 py-3 bg-dark text-white no-underline rounded-full text-sm mb-8"
        >
          Visit Marketplace
        </Link>
      </div>

      {/* Images */}
      <div className="grid grid-cols-2 gap-5 w-full lg:max-w-[45%] animate-scrollleft">
        <div className="relative aspect-square">
          <Image
            src="/assets/chaewul-kim-isb96g4zBlk-unsplash.jpg"
            alt="Climbing gear example 1"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="relative aspect-square">
          <Image
            src="/assets/chaewul-kim-K8ku-fxIsuY-unsplash.jpg"
            alt="Climbing gear example 2"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="relative aspect-square">
          <Image
            src="/assets/cindy-chen--7nnXc4jBWU-unsplash.jpg"
            alt="Climbing gear example 3"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="relative aspect-square">
          <Image
            src="/assets/kody-dahl-b4-Ep-dDJ9k-unsplash.jpg"
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