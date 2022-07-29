import "./GoogleHome.scss";
import GoogleLogo from '../../assets/Google-logo.svg';
import SearchBar from '../../assets/search-bar.svg';
import SearchIcon from '../../assets/search-icon.svg';
import Microphone from '../../assets/microphone.svg';

function GoogleHome() {
    return (
        <section className="google">
            <img className="google__logo" src={GoogleLogo} alt="Google-logo"></img>
            <input className="google__search--bar" type="text" ></input>
            <div className="google__search--buttons" >
                <button className="google__search--button">Google Search</button>
                <button className="google__search--button">I'm Feeling Lucky</button>
            </div>

        </section >

    );
}

export default GoogleHome;
