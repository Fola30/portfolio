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
      <h3 class="">I am proficient in a range of technologies</h3>
      <p class="lead w-75">With a solid foundation in programming, I bring a unique blend of creativity and technical expertise to every project I undertake.</p>
      <div className="row">
        <div className="skills-container col-lg-6">
          <Skill name="JavaScript" img={js} />
          <Skill name="React Js" img={react} />
          <Skill name="Node Js" img={node} />
        </div>
        <div className="skills-container col-lg-6">
          <Skill name="Blockchain" img={blockchain} />
          <Skill name="postgreSQL" img={postgresql} />
          <Skill name="Python" img={python} />
        </div>
      </div>
    </div>
  );
}

export default SkillPage;
