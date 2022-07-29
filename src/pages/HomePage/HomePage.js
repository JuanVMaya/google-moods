import React from "react";
import Feelings from "../../components/Feelings/Feelings";
import FeelingRange from "../../components/FeelingRange/FeelingRange";
import Recommendations from "../../components/Recommendations/Recommendations";
import BreathingExercise from "../../components/BreathingExercise/BreathingExercise";
import GoogleHome from "../../components/GoogleHome/GoogleHome";
import Feedback from "../../components/Feedback/Feedback";
import FeelingBox from "../../components/feelingBox/FeelingBox";
import "./HomePage.scss";

class HomePage extends React.Component {
  state = {
    selectedMood: "",
    selectedResource: null,
    showEmojis: true,
    showSeverity: false,
    showSimpathyNote: false,
    showHowYouFeel: false,
    showRecommendations: false,
    showBreathingExercise: false,
    showFeedback: false,
  };
  handleSelectMood = (mood) => {
    this.setState({
      selectedMood: mood,
      showSeverity: true,
    });
  };
  handleSelectSeverity = () => {
    //For demo purposes this will disable the Feelings and Feeling Range
    // In the real application it would save the feeling and severity to the database

    this.setState({
      showEmojis: false,
      showSeverity: false,
      showSimpathyNote: true,
    });
    setTimeout(() => {
      this.setState({
        showSimpathyNote: false,
        showHowYouFeel: true,
      });
    }, 3000);
  };

  handleFinishJournalEntry = () => {
    this.setState({
      showHowYouFeel: false,
      showRecommendations: true,
    });
  };

  handleSelectResource = (resource) => {
    this.setState({
      selectedResource: resource,
    });
  };

  handleSelectContinue = () => {
    this.setState({
      showRecommendations: false,
      showBreathingExercise: true,
    });
  };

  handleFinishBreathingExercise = () => {
    this.setState({
      showBreathingExercise: false,
      showFeedback: true,
    });
  };

  render() {
    return (
      <article className="homepage">
        <GoogleHome selectedMood={this.state.selectedMood} />
        {this.state.showEmojis && (
          <Feelings
            selectMood={this.handleSelectMood}
            mood={this.state.selectedMood}
            showSeverity={this.state.showSeverity}
          />
        )}
        {this.state.showEmojis && this.state.showSeverity && (
          <FeelingRange selectSeverity={this.handleSelectSeverity} />
        )}
        {this.state.showSimpathyNote && (
          <h1 className="sympathy-note">
            We are sad to hear you feel this way...
          </h1>
        )}
        {this.state.showHowYouFeel && (
          <FeelingBox finishJournalEntry={this.handleFinishJournalEntry} />
        )}
        {this.state.showRecommendations && (
          <Recommendations
            selectedResource={this.state.selectedResource}
            selectResource={this.handleSelectResource}
            confirmResource={this.handleSelectContinue}
          />
        )}
        {this.state.showBreathingExercise && (
          <BreathingExercise
            finishBreathingExercise={this.handleFinishBreathingExercise}
          />
        )}
        {this.state.showFeedback && <Feedback />}
      </article>
    );
  }
}

export default HomePage;