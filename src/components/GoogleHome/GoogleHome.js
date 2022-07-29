import "./GoogleHome.scss";
import GoogleLogo from "../../assets/Google-logo.svg";
import { Link } from "react-router-dom";

function GoogleHome({ selectedMood }) {
  return (
    <section className={`google ${selectedMood ? "google--less-margin" : ""}`}>
      <img className="google__logo" src={GoogleLogo} alt="Google-logo"></img>
      <input className="google__search--bar" type="text"></input>
      <div className="google__search--buttons">
        <button className="google__search--button">Google Search</button>
        <button className="google__search--button">I'm Feeling Lucky</button>
      </div>
      {!selectedMood && (
        <p className="google__offer">
          Google offered in: <Link to="https://www.google.ca/">Français</Link>{" "}
        </p>
      )}
    </section>
  );
}

export default GoogleHome;
