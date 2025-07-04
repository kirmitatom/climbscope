import React from "react";

const Features = () => {
  return (
    <section className="text-center py-16 px-5 bg-secondary border-t-4 border-textDark">
      <h2 className="text-4xl font-medium font-header mb-6 text-textDark animate-fadeInUp">
        Why Climb<span className="text-white">scope</span>?
      </h2>
      <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-12">
        Discover climbing routes and Events and stay up to date in the climbing community 
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="bg-textDark text-white w-12 h-12 rounded-full flex items-center justify-center text-lg mb-4">1</div>
          <h3 className="font-body text-xl font-semibold text-textDark mb-2">Discover Routes</h3>
          <p className="text-sm text-gray-300">
            Explore interactive maps to find climbing routes near you or worldwide with filters by type and difficulty.
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="bg-textDark text-white w-12 h-12 rounded-full flex items-center justify-center text-lg mb-4">2</div>
          <h3 className="font-body text-xl font-semibold text-textDark mb-2">Ascend your rank</h3>
          <p className="text-sm text-gray-300">
            Test your skills and climb the leaderboard with our competitive ranking system that rewards progress and dedication.
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="bg-textDark text-white w-12 h-12 rounded-full flex items-center justify-center text-lg mb-4">3</div>
          <h3 className="font-body text-xl font-semibold text-textDark mb-2">Gear Market</h3>
          <p className="text-sm text-gray-300">
            Scan and analyze climbing routes with AI-powered tools to optimize your planning and performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;