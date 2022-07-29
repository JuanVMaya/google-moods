import React from "react";
import Feelings from "../../components/Feelings/Feelings";
import FeelingRange from "../../components/FeelingRange/FeelingRange";
import Recommendations from "../../components/Recommendations/Recommendations";
import BreathingExercise from "../../components/BreathingExercise/BreathingExercise";
import GoogleHome from "../../components/GoogleHome/GoogleHome";
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
        showRecommendations: true, //While Muhammed works on the text input
      });
    }, 3000);
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
      //Next step set to true
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
        {/* {
          this.state.showHowYouFeel && (
            <div className="placeholder">Needs to be changed</div>
          )
          //Muhammad, here we need the user to enter their feelings and how they feel
          // I have a div as a placeholder
          //You can use the BigCard component as the container
        } */}
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
      </article>
    );
  }
}

export default HomePage;
