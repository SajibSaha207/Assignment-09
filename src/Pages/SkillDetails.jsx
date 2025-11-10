import toast, { Toaster } from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { useLoaderData } from "react-router";
import 'animate.css';

const SkillDetails = () => {
  const skills = useLoaderData() || [];

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("Booking Successful!");
    e.target.reset();
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold mb-6 text-center animate__animated animate__rubberBand">All Skill Details</h2>

      {skills.length === 0 && (
        <p className="text-center text-gray-500">No skills found.</p>
      )}

       
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {skills.map((skill) => (
          <div
            key={skill.skillId}
            className="bg-base-200 p-4 rounded-lg shadow-md"
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-2">{skill.skillName}</h3>
            <p className="text-gray-600">{skill.description}</p>
            <div className="flex justify-between">
                <p className="flex items-center"><MdAttachMoney className="text-black-500" />
                   <span>{skill.price}</span></p>
                   <p className="flex items-center gap-2"><FaStar className="text-yellow-500" />
                     <span>{skill.rating}</span></p> 
                     </div>
          </div>
        ))}
      </div>

     
      <div className="max-w-md mx-auto bg-base-200 p-6 rounded-lg shadow-md ">
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Book a Session
        </h3>

        <form onSubmit={handleBooking}>
          <label className="label">Name</label>
          <input
            type="text"
            className="input mb-3"
            placeholder="Your Name"
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input mb-3"
            placeholder="Your Email"
            required
          />

          <button className="btn btn-neutral  mt-3">Book Now</button>
        </form>
      </div>

      <Toaster position="top-center" />
    </div>
  );
};

export default SkillDetails;
