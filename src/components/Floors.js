import "./Floors.css";

function Floors(props) {
    const {title} = props;
    return(
        <button className="B-floors">
        <p>{title}</p>
        </button>
    );
}

export default Floors;


