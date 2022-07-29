import BigCard from "../BigCard/BigCard";
import Speaker from "../../assets/speaker.svg";
import moodsTogether from "../../assets/moodsTogether.png";
import feedbackScale from "../../assets/feedback-scale.png";
import "./Feedback.scss";

const Feedback = () => {
  return (
    <BigCard>
      <div className="feedback__top">
        <h1>Each breath links the mind & body</h1>
        <h3>
          Practicing a simple exercise like this when you’re feeling frustrated
          can help you relax and improve your overall wellbeing.
        </h3>
      </div>
      <section className="feedback__middle">
        <img
          src={moodsTogether}
          alt="Moods icons all together"
          className="feedback_moods-icons"
        />
      </section>
      <div className="feedback__bottom">
        <img src={Speaker} alt="read aloud" />
        <div className="feedback__survey">
          <h3>Overall, how satisfied are you with Google Moods?</h3>
          <img
            src={feedbackScale}
            alt="feedback scale 1. very satisfied 2. somewhat satisfied 3. neutral satisfied or dissatisfied 4. somewhat dissatisfied 5. very dissatisfied"
            className="feedback_moods-icons"
          />
        </div>
      </div>
    </BigCard>
  );
};

export default Feedback;
