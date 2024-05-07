import {useEffect} from "react";
import Nav from "./Header";
import './App.css';
import Hero from './Hero';
import SkillPage from "./SkillPage";
import About from "./About";
import Contact from "./Contact";

function App() {
  useEffect(() => {
    let sections = document.querySelectorAll('section');
    let slack = 0;
    let nav = document.querySelector('#header');

    window.onload = () => {
      sections.forEach((sec) => {
        sec.classList.add('show-animate');
      })
    }

    window.onscroll = () => {
      sections.forEach((sec, i) => {
          let scrollDistance = window.scrollY;
          let secDistance = sec.offsetTop;

          switch (i) {
            case 1:
              slack = 300;
              break;

            case 3:
              slack = 550;
              break;
          
            default:
              break;
          }
          
          if(scrollDistance >= secDistance - slack) {
              sec.classList.add('show-animate');
          }
          else {
              sec.classList.remove('show-animate');
          }

          if (scrollDistance >= secDistance && i === 1) {
            nav.classList.add('fixed-top', 'container', 'pt-1', 'nav-scroll');
            nav.classList.remove('py-4');
          }
          else if (scrollDistance < secDistance && i === 1) {
            nav.classList.remove('fixed-top', 'container', 'pt-1', 'nav-scroll');
            nav.classList.add('py-4');
          }
      })
    }
  }, []);

  return (
      <div>
        <section id="home">
          <div className="container page">
              <Nav />
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
