import BigCard from "../BigCard/BigCard";
import Microphone from "../../assets/microphone.svg";
import Speaker from "../../assets/speaker.svg";
import "./Recommendations.scss";

const Recommendations = ({
  selectedResource,
  selectResource,
  confirmResource,
}) => {
  const handleSelectResource = () => {
    // This would be handled as one option for each onClick handler
    selectResource(6); //Sets to 3 easy breathing exercises
  };
  return (
    <BigCard>
      <div className="recommendations__top">
        <h1>We are here for you</h1>
        <h3>
          Based on what you are feeling, we have found some resources and
          suggestions that may help you
        </h3>
      </div>
      <section className="recommendations__middle">
        <button
          className={`recommendations__option-button ${
            selectedResource === 1
              ? "recommendations__option-button--selected"
              : ""
          }`}
          onClick={handleSelectResource}
        >
          5 ways to improve your mental health
        </button>
        <button
          className={`recommendations__option-button ${
            selectedResource === 2
              ? "recommendations__option-button--selected"
              : ""
          }`}
          onClick={handleSelectResource}
        >
          How to reduce social anxiety
        </button>
        <button
          className={`recommendations__option-button ${
            selectedResource === 3
              ? "recommendations__option-button--selected"
              : ""
          }`}
          onClick={handleSelectResource}
        >
          Calming meditation guide
        </button>
        <button
          className={`recommendations__option-button ${
            selectedResource === 4
              ? "recommendations__option-button--selected"
              : ""
          }`}
          onClick={handleSelectResource}
        >
          Find a therapist near you
        </button>
        <button
          className={`recommendations__option-button ${
            selectedResource === 5
              ? "recommendations__option-button--selected"
              : ""
          }`}
          onClick={handleSelectResource}
        >
          Chat with an online therapist
        </button>
        <button
          className={`recommendations__option-button ${
            selectedResource === 6
              ? "recommendations__option-button--selected"
              : ""
          }`}
          onClick={handleSelectResource}
        >
          3 easy breathing exercises
        </button>
      </section>
      <div className="recommendations__bottom">
        <div>
          <img src={Microphone} alt="speech-to-text" />
          <img src={Speaker} alt="read aloud" />
        </div>
        <div className="action-buttons">
          <button className="action-buttons__button action-buttons__button--cancel">
            Cancel
          </button>
          <button
            className="action-buttons__button action-buttons__button--continue"
            disabled={selectedResource ? false : true}
            onClick={confirmResource}
          >
            Continue
          </button>
        </div>
      </div>
    </BigCard>
  );
};

export default Recommendations;
