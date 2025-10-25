import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const SkillCards = ({ skill }) => {
  return (
    <div className="card bg-base-100 shadow-md p-4 rounded-lg ">
      <img
        src={skill.image}
        alt={skill.skillName}
        className="rounded-lg mb-3 w-full h-40 object-cover"
      />

      <div className="p-4 space-y-3">
        <h2 className="card-title text-2xl font-semibold text-gray-800">
          {skill.skillName}
        </h2>

        <div className="text-sm text-gray-700">
          {skill.description.length > 150 ? (
            <>
              {skill.description.slice(0, 150)}...
              <Link
                to={`/skill-description/${skill.skillId}`}
                className="text-primary font-bold cursor-pointer hover:underline ml-1"
              >
                View Details
              </Link>
            </>
          ) : (
            skill.description
          )}
        </div>
     <p className="flex items-center gap-2"><MdAttachMoney className="text-black-500" />
        <span>{skill.price}</span></p>
        <p className="flex items-center gap-2"><FaStar className="text-yellow-500" />
          <span>{skill.rating}</span></p> 
   
      </div>
    </div>
  );
};

export default SkillCards;
