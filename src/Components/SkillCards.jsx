import React from 'react';

const SkillCards = () => {
    return (
           <div className="bg-white rounded-lg shadow p-4">
      <div className="h-40 bg-slate-100 rounded mb-3 flex items-center justify-center overflow-hidden">
        <img src={skill.image} alt={skill.skillName} className="object-cover h-full w-full"/>
      </div>
      <h3 className="font-semibold text-lg">{skill.skillName}</h3>
      <p className="text-sm text-gray-500">{skill.providerName}</p>
      <div className="flex items-center justify-between mt-3">
        <div className="text-sm">⭐ {skill.rating}</div>
        <div className="font-bold text-primary">${skill.price}</div>
      </div>
      <Link to={`/skills/${skill.skillId}`} className="mt-3 inline-block text-sm text-secondary">View Details</Link>
    </div>
    );
};

export default SkillCards;