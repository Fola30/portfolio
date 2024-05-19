import Skill from "./Skill";
import js from "../images/js.png";
import react from "../images/react.png";
import node from "../images/node.png";
import postgresql from "../images/postgresql.png";
import python from "../images/python.png";
import blockchain from "../images/blockchain.png";

function SkillPage() {
  return (
    <div class="skills-page">
      <h2 className="page-header">My Skills</h2>
      <h3 class="sub-header" data-aos="zoom-out">I am proficient in a range of technologies</h3>
      <p class="lead" data-aos="fade-up" data-aos-delay="500">With a solid foundation in programming, I bring a unique blend of creativity and technical expertise to every project I undertake.</p>
        <div className="skills-container row">
          <Skill name="JavaScript" img={js} />
          <Skill name="React Js" img={react} i="200" />
          <Skill name="Node Js" img={node} i="400" />
          <Skill name="Blockchain" img={blockchain} i="600" />
          <Skill name="postgreSQL" img={postgresql} i="800" />
          <Skill name="Python" img={python} i="1000" />
        </div>
    </div>
  );
}

export default SkillPage;
