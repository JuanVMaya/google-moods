import Happy from "../../assets/Happy.svg";
import Neutral from "../../assets/Neutral.svg";
import Sad from "../../assets/Sad.svg";
import Frustrated from "../../assets/Frustrated.svg";
import Microphone from "../../assets/microphone.svg";
import ArrowBack from "../../assets/arrow_back_24px.svg";
import "./Feelings.scss";

const Feelings = ({ selectMood, mood, showSeverity }) => {
  const handleSelectMood = () => {
    selectMood("Frustrated");
  };
  return (
    <section className="question-container">
      <div className="question">
        {showSeverity ? (
          <img
            className="question__back-button"
            src={ArrowBack}
            alt="back button"
          />
        ) : (
          <div className="question__spacer"></div>
        )}
        <h1 className="question__text">How are you feeling right now?</h1>
        <div className="question__alternate-input">
          <img src={Microphone} alt="text-to-speech" />
        </div>
      </div>
      <div className="answer">
        <button className="answer__button answer__button--happy" onClick={handleSelectMood}>
          <img
            className={`answer__image ${mood === "Frustrated" || mood === "Neutral" || mood === "Sad"
              ? "answer__image--unselected"
              : ""
              }`}
            src={Happy}
            alt="happy emoji"
          />
          <p>Happy</p>
        </button>
        <button className="answer__button answer__button--neutral" onClick={handleSelectMood}>
          <img
            className={`answer__image ${mood === "Frustrated" || mood === "Happy" || mood === "Sad"
              ? "answer__image--unselected"
              : ""
              }`}
            src={Neutral}
            alt="neutral emoji"
          />
          <p>Neutral</p>
        </button>
        <button className="answer__button answer__button--sad" onClick={handleSelectMood}>
          <img
            className={`answer__image ${mood === "Frustrated" || mood === "Happy" || mood === "Neutral"
              ? "answer__image--unselected"
              : ""
              }`}
            src={Sad}
            alt="sad emoji"
          />
          <p>Sad</p>
        </button>
        <button className="answer__button answer__button--frustrated" onClick={handleSelectMood}>
          <img
            className={`answer__image ${mood === "Sad" || mood === "Happy" || mood === "Neutral"
              ? "answer__image--unselected"
              : ""
              }`}
            src={Frustrated}
            alt="frustrated emoji"
          />
          <p>Frustrated</p>
        </button>
      </div>
    </section>
  );
};

export default Feelings;
