function Skill(props) {
    return (
        <div id="skill-box" className="skill-box" i={props.i}>
            <img className="skill-img" src={props.img} alt={props.name} />
            <h5 className="skill-name">{props.name}</h5>
        </div>
    );
}

export default Skill;