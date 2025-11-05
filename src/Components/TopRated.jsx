import React, { useEffect, useState } from 'react';


const TopRated = () => {
    const [rated, setRated] = useState([]);

    useEffect(()=>{
        fetch("/skill.json")
        .then((res)=>res.json())
        .then((data)=>{
            const topRated = data
            .sort((a,b)=> b.rating - a.rating).slice(0, 3);
            setRated(topRated);
        })
        .catch((error)=> console.error("Error fetching top skill", error));
    },[])

    
    return (
      
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
            {rated.map((skill)=>(
                <diV key={skill.skillId} className="border rounded-lg flex  items-center p-2 gap-3">
                    <img className="w-24 h-24 rounded-full object-cover "
                    src={skill.providerImg} />
                
<h3 className=' text-lg font-bold'>{skill.providerName}</h3>
                </diV>
            ))}
            
        </div>
    );
};

export default TopRated;