import Feelings from "../../components/Feelings/Feelings";
import FeelingRange from "../../components/FeelingRange/FeelingRange";
import "./HomePage.scss";
import React from "react";

class HomePage extends React.Component {
  state = {
    selectedMood: "",
  };
  handleSelectMood = (mood) => {
    this.setState({
      selectedMood: mood,
    });
  };

  render() {
    console.log(this.state.selectedMood);
    return (
      <article className="homepage">
        <h1>Search Bar</h1>
        <Feelings selectMood={this.handleSelectMood} mood={this.state.selectedMood} />
        <FeelingRange />
      </article>
    );
  }
}

export default HomePage;
