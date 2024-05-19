import Time from "./Timer";
import { Link } from 'react-scroll';

function Nav(props) {
  return (
    <div class="header-div pt-4 pb-2">
      <header id={props.name} class="d-flex justify-content-between align-items-center">
        <Time />
        <ul class="nav">
            <li class="nav-item mx-lg-4">
              <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link>
              <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link>
            </li>
            <li class="nav-item mx-lg-4">
              <Link to="skills" smooth={true} duration={500} className="nav-link">Skills</Link>
              <Link to="skills" smooth={true} duration={500} className="nav-link">Skills</Link>
            </li>
            <li class="nav-item mx-lg-4">
              <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
              <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
            </li>
            <li class="nav-item mx-lg-4">
              <Link to="about" smooth={true} duration={500} className="nav-link">About</Link>
              <Link to="about" smooth={true} duration={500} className="nav-link">About</Link>
            </li>
            <li class="nav-item mx-lg-4">
              <Link to="contact" smooth={true} duration={500} className="nav-link">Contact Me</Link>
              <Link to="contact" smooth={true} duration={500} className="nav-link">Contact Me</Link>
            </li>
        </ul>
        <div></div>
      </header>
  </div>
  );
}

export default Nav;
