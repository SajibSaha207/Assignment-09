import React from 'react';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';

const HowItWorks = () => {
    return (
        
        <div>
  <h2 className="font-bold text-2xl justify-self-start mb-5">How it Works</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
    {/* Card 1 */}
    <div className="card shadow-md bg-purple-700 rounded-lg flex items-center p-4 gap-4">
      <div className="w-16 h-16 rounded-full border border-gray-400 flex items-center justify-center">
        <RiNumber1 size={30} className="text-white" />
      </div>
      <p className="text-2xl font-bold text-white">Browse Skill</p>
    </div>

    {/* Card 2 */}
    <div className="card shadow-md bg-purple-700 rounded-lg flex items-center p-4 gap-4">
      <div className="w-16 h-16 rounded-full border border-gray-400 flex items-center justify-center">
        <RiNumber2 size={30} className="text-white" />
      </div>
      <p className="text-2xl font-bold text-white">Book Session</p>
    </div>

    {/* Card 3 */}
    <div className="card shadow-md bg-purple-700 rounded-lg flex items-center p-4 gap-4">
      <div className="w-16 h-16 rounded-full border border-gray-400 flex items-center justify-center">
        <RiNumber3 size={30} className="text-white" />
      </div>
      <p className="text-2xl font-bold text-white">Learn and get Certified</p>
    </div>
  </div>
</div>
    );
};

export default HowItWorks;