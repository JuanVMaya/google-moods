import Feelings from "../../components/Feelings/Feelings";
import FeelingRange from "../../components/FeelingRange/FeelingRange";
import React from "react";
import "./HomePage.scss";
import Recommendations from "../../components/Recommendations/Recommendations";
import GoogleHome from "../../components/GoogleHome/GoogleHome";
import FeelingBox from "../../components/FeelingBox/FeelingBox";

class HomePage extends React.Component {
  state = {
    selectedMood: "",
    showEmojis: true,
    showSeverity: false,
    showSimpathyNote: false,
    showHowYouFeel: false,
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

  render() {
    return (
      <article className="homepage">
        <GoogleHome />
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
        {
          this.state.showHowYouFeel && (
            
            <FeelingBox/>
          )

        }
        
      </article>
    );
  }
}

export default HomePage;
