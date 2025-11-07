import React, { createContext, useEffect, useState } from 'react';

export const SkillContext = createContext();
const SkillProvider = ({ children }) => {
      const [skillDetail, setSkillDetail] =useState([]);
    const [selectedSkill, setSelectedSkill] = useState([]);

const removeSkill =(id)=>{
    const updateSkill=selectedSkill.filter(
        (skillDetail)=>skillDetail.skillId !==id )
        setSelectedSkill(updateSkill)
}

useEffect(()=>{
    fetch('/skill.json')
    .then(res => res.json())
    .then(data =>setSkillDetail(data));
},[]);

const addSkill = (skill) =>{
    const exists = selectedSkill.find(s => s.skillId === skill.skillId)
    if (!exists) setSelectedSkill([...selectedSkill, skill])
};

    return (
      <SkillContext value={{skillDetail, selectedSkill, addSkill, removeSkill}}>
        {children}
      </SkillContext>
    );
};
export default SkillProvider;