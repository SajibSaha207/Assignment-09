import React, { useEffect, useState } from 'react';
import SkillCards from '../Components/SkillCards';
import TopRated from '../Components/TopRated';
 

const Home = () => {
  const [skills, setSkills] = useState([]);
 
 

  useEffect(() => {
    fetch("/skill.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))

     
       
  }, []);


  return (
    <div>
      
      <section>
        <h2 className="font-bold text-2xl mb-4 justify-self-start">Popular Skills</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {skills.map((s) => (
            <SkillCards key={s.skillId} skill={s} />
          ))}
        </div>

        
      </section>
     
   <div className= "">
        <h2 className="font-bold text-2xl justify-self-start mt-10">Top Rated Provider</h2>
       </div>
    </div>
    
  );
};

export default Home;
