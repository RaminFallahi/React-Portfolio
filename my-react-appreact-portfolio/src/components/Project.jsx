import { useEffect, useState } from 'react';

export default function ProjectsPage() {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      let response = await fetch('http://localhost:8888/api/projects');
      let data = await response.json();
      setProjectsData(data);
    }
    getProjects();
  }, []);

  if (!projectsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='projects-container'>
      <h1>{projectsData.title}</h1>
      <ul>
        {projectsData.map((project) => (
          <li key={project.id} className='project'>
            <h2>{project.title}</h2>
            <p>{project.content}</p>
            <div className="image">
              <img src={`/storage/projects/${project.image}`} alt={project.title} />
              {/* <img src="http://localhost:8888/storage/projects/image-name.jpg" alt={project.title} /> */}
              {/* <img src={`http://localhost:8888/${project.image}`} alt={project.title} /> */}
            </div>
            <div>
              <span className="slug">{project.slug}</span>
            </div>
              <div className="link">
                <a href={project.url}>
                  <div className="ui right floated button">
                    Git Repo<i className="right chevron icon"></i>
                  </div>
                </a>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
