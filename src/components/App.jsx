import {useEffect} from "react";
import Nav from "./Header";
import Hero from './Hero';
import SkillPage from "./SkillPage";
import About from "./About";
import Contact from "./Contact";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
    let sections = document.querySelectorAll('section');
    let nav = document.querySelector('#header');

    window.onload = () => {
      sections.forEach((sec) => {
        sec.classList.add('show-animate');
      })
    }

    window.onscroll = () => {
      let scrollDistance = window.scrollY;
      if (scrollDistance > 37) {
        nav.classList.add('fixed-top', 'container', 'nav-scroll');
      }
      else if (scrollDistance === 0) {
        nav.classList.remove('fixed-top', 'container', 'nav-scroll');
      }
    }
  }, []);

  return (
      <div>
        <section id="home">
          <div className="container page">
              <Nav name="header" />
              <Hero />
              <hr/>
          </div>
        </section>
        <section id="skills">
          <div className="container page">
            <SkillPage />
            <hr/>
          </div>
        </section>
        <section id="projects"></section>
        <section id="about">
          <div className="container page">
            <About />
            <hr/>
          </div>
        </section>
        <section id="contact">
          <div className="container page">
            <Contact />
            <hr/>
          </div>
        </section>
      </div>
  )
}

export default App;
