import React from "react";

const SkillCards = ({ skill }) => {
  return (
    <div className="card bg-base-100 shadow-md p-4 rounded-lg">
      <img
        src={skill.image}
        alt={skill.skillName}
        className="rounded-lg mb-3 w-full h-40 object-cover"
      />
      <h3 className="font-bold text-lg">{skill.skillName}</h3>
      <p className="text-sm text-gray-600">{skill.description}</p>
      <p className="font-semibold mt-2">💰 ${skill.price}</p>
      <p className="text-yellow-500">⭐ {skill.rating}</p>
    </div>
  );
};

export default SkillCards;
