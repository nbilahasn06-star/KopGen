import "./FloatingKebi.css";
import kebi from "../assets/kebi.png";

function FloatingKebi({ onClick }) {
  return (
    <button className="kebi-button" onClick={onClick}>
      <img src={kebi} alt="Kebi" />
    </button>
  );
}

export default FloatingKebi;