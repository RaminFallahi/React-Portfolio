import { useEffect, useState } from 'react';

export default function EducationPage() {
  const [educationData, setEducationData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8888/api/educations')
      .then(response => response.json())
      .then(data => 
        {
          console.log(data);
          setEducationData(data)
        })
        .catch(error => console.log(error));
  }, []);

  if (!educationData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='educations-container'>
      <h1>{educationData.title}</h1>
      <ul>
        {educationData.map((education) => (
          <li key={education.id} className='education'>
            <h2>{education.level}</h2>
            <h2>{education.title}</h2>
            <h2>{education.school}</h2>
            <h2>{education.started}</h2>
            <h2>{education.ended}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
