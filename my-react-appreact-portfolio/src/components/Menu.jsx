import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutme">About Me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/educations">Education</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
      </ul>
    </nav>
  );
}
