 import React, { useContext } from 'react';
import { SkillContext } from '../Provider/SkillProvider';
import toast, { Toaster } from 'react-hot-toast';
 
 const SkillDetails = () => {
    const { selectedSkill, removeSkill } = useContext(SkillContext)
    const handleBooking=(id)=>{
        toast.success('Booking Successful!')
        removeSkill(id)


    }
    return (
       <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-6">Our Selected Skill</h2>

      {selectedSkill.length === 0 &&(
        <p className="text-center text-gray-500">No Skill added yet.</p>
      )}

       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
{selectedSkill.map(skill =>(
    <div key={skill.skillId} className="bg-gray-200 rounded-md shadow-md p-4">
            <img src={skill.image} alt={skill.skillName} className="w-full h-40 object-cover rounded-md" />
            <p className="font-light mt-2">{skill.skillName}</p>
             <div className="">
   <fieldset className="fieldset mt-2 bg-base-200 border-base-300 rounded-box w-[280px] border p-2">

 <label className="label">Name</label>
  <input type="text" className="input" placeholder="Your Name" />

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Your Email" />

   <button className="btn btn-neutral mt-4" onClick={()=>handleBooking(skill.skillId)}>Book Now</button>

   </fieldset>


       </div>
        </div>
        ))}
        </div>
         <Toaster position="top-center" reverseOrder={false} />
         </div>
    );
 };
 
 export default SkillDetails;


































// import React from "react";
// import { useLoaderData, useParams } from "react-router-dom";

// const SkillDetails = () => {
//   const skills = useLoaderData();
//   const { id } = useParams();
//   const skill = skills.find((item) => item.skillId === parseInt(id));

//   if (!skill) {
//     return <p className="text-center text-red-500 mt-10">Skill not found</p>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-4">{skill.skillName}</h2>
//       <img src={skill.image} alt={skill.skillName} className="w-full rounded mb-5" />
//       <p className="text-gray-700">{skill.description}</p>
//       <p className="mt-3 text-lg">💰 Price: ${skill.price}</p>
//       <p className="text-yellow-500">⭐ {skill.rating}</p>
//     </div>
//   );
// };

// export default SkillDetails;
