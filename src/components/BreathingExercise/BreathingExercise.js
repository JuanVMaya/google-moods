import BigCard from "../BigCard/BigCard";
import React from "react";
import breathingGif from "../../assets/breathing_exercise_360.gif";
import "./BreathingExercise.scss";

class BreathingExercise extends React.Component {
  state = { breathingExerciseComplete: false };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        breathingExerciseComplete: true,
      });
    }, 10000);
  }
  render() {
    return (
      <BigCard>
        <div className="breathing__top">
          <h1>Breathing Exercise</h1>
          <h3>
            Breathing exercises are a useful tool for achieving a relaxed clear
            state of mind.
          </h3>
        </div>
        <section className="breathing__middle">
          <img
            src={breathingGif}
            className="breathing__gif"
            alt="breathe in on the count of 5, breathe out on the count of 5"
          />
        </section>
        <div className="breathing__bottom">
          <div className="breathing__article-section">
            <p className="breathing__article-text">
              Article on how these breathing excersises can help you:{" "}
              <span>
                <a href="https://www.health.harvard.edu/mind-and-mood/relaxation-techniques-breath-control-helps-quell-errant-stress-response">
                  Click here
                </a>
              </span>
            </p>
          </div>
          <div className="action-buttons">
            <button className="action-buttons__button action-buttons__button--cancel">
              Cancel
            </button>
            <button
              className="action-buttons__button action-buttons__button--continue"
              disabled={this.state.breathingExerciseComplete ? false : true}
              onClick={this.props.finishBreathingExercise}
            >
              Finish
            </button>
          </div>
        </div>
      </BigCard>
    );
  }
}

export default BreathingExercise;
