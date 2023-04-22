import { useEffect, useState } from 'react';

export default function SkillsPage() {
  const [skillData, setSkillData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8888/api/skills')
      .then(response => response.json())
      .then(data => 
        {
          console.log(data);
          setSkillData(data);
        })
        .catch(error => console.log(error));
  }, []);

  if (!skillData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='skills-container'>
      <h1>{skillData.title}</h1>
        <p>
          As a passionate junior web developer, I've already acquired knowledge in key web development technologies. My skill-set includes.
        </p>
      <ul>
        {skillData.map((skill) => (
          <li key={skill.id} className='skill'>
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
