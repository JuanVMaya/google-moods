import Feelings from "../../components/Feelings/Feelings";
import FeelingRange from "../../components/FeelingRange/FeelingRange";
import React from "react";
import "./HomePage.scss";

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
        <h1>Search Bar</h1>
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
          this.state.showHowYouFeel && <div className="placeholder">Needs to be changed</div>
          //Muhammad, here we need the user to enter their feelings and how they feel
          // I have a div as a placeholder
        }
        
      </article>
    );
  }
}

export default HomePage;
