import "./FloatingKebi.css";
import kebi from "../assets/Kebi.png";

function FloatingKebi({ onClick }) {
  return (
    <button className="kebi-button" onClick={onClick}>
      <img src={kebi} alt="Kebi" />
    </button>
  );
}

export default FloatingKebi;