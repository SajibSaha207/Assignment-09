import React from "react";
import CountUp from "react-countup";

const CommunityStats = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">
        Our Growing Community 
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
    
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-5xl font-extrabold text-indigo-600">
            <CountUp end={120} duration={3} />+
          </h3>
          <p className="text-gray-600 mt-2 font-medium">Active Learners</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-5xl font-extrabold text-indigo-600">
            <CountUp end={75} duration={3} />+
          </h3>
          <p className="text-gray-600 mt-2 font-medium">Skills Shared</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-5xl font-extrabold text-indigo-600">
            <CountUp end={340} duration={3} />+
          </h3>
          <p className="text-gray-600 mt-2 font-medium">Sessions Completed</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-5xl font-extrabold text-indigo-600">
            <CountUp end={25} duration={3} />+
          </h3>
          <p className="text-gray-600 mt-2 font-medium">Local Communities</p>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
