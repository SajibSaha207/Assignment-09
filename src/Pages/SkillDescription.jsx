import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const SkillDescription = () => {
  const data = useLoaderData();  
  const { id } = useParams();  
  const [skill, setSkill] = useState({});

  useEffect(() => {
    const foundSkill = data.find((singleSkill) => singleSkill.skillId == id);
    setSkill(foundSkill);
  }, [data, id]);

  if (!skill) {
    return <p className="text-center text-red-500 mt-10">Skill not found</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        {skill.skillName}
      </h2>

      <div className="max-w-lg mx-auto bg-base-200 p-5 rounded-lg shadow-md">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full rounded-lg mb-4"
        />
        <p className="text-gray-700 mb-2">{skill.description}</p>
        <p className="font-semibold mb-1"> Price: ${skill.price}</p>
        <p className="font-semibold text-yellow-500 mb-3">
           Rating: {skill.rating}
        </p>
        <p className="font-medium text-gray-600">
          Instructor: {skill.providerName}
        </p>
      </div>
    </div>
  );
};

export default SkillDescription;
