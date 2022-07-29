import Happy from "../../assets/Happy.svg";
import Neutral from "../../assets/Neutral.svg";
import Sad from "../../assets/Sad.svg";
import Frustrated from "../../assets/Frustrated.svg";
import Microphone from "../../assets/microphone.svg";
import Speaker from "../../assets/speaker.svg";
import ArrowBack from "../../assets/arrow_back_24px.svg";

import "./Feelings.scss";
const Feelings = () => {
  return (
    <section className="question-container">
      <div className="question">
        <img
          className="question__back-button"
          src={ArrowBack}
          alt="back button"
        />
        <h1 className="question__text">How are you feeling right now?</h1>
        <div>
          <img src={Microphone} alt="text-to-speech" />
          <img src={Speaker} alt="text-to-speech" />
        </div>
      </div>
      <h3 >Pick your closest mood below</h3>
      <div className="answer">
        <button className="answer__button">
          <img className="answer__image" src={Happy} alt="happy emoji" />
          <p>Happy</p>
        </button>
        <button className="answer__button">
          <img className="answer__image" src={Neutral} alt="happy emoji" />
          <p>Neutral</p>
        </button>
        <button className="answer__button">
          <img className="answer__image" src={Sad} alt="happy emoji" />
          <p>Sad</p>
        </button>
        <button className="answer__button">
          <img className="answer__image" src={Frustrated} alt="happy emoji" />
          <p>Frustrated</p>
        </button>
      </div>
    </section>
  );
};

export default Feelings;
