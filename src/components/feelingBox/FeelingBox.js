import React from "react";
import people from "../../assets/Layer2.png";
import "./FeelingBox.scss";

class FeelingBox extends React.Component {
  state = {
    feeling: "",
  };

  handleDescribeFeelings = (event) => {
    this.setState({
      feeling: event.target.value,
    });
  };

  render() {
    return (
      <article className="box">
        <h1 className="box__header">Share how you are feeling</h1>
        <h2 className="box__subheader">
          Sharing your thoughts will help us assist you better.
        </h2>

        <textarea
          className="box__text-area"
          onChange={this.handleDescribeFeelings}
          value={this.state.feeling}
        ></textarea>

        <section className="box__bottom">
          <img className="box__img" src={people} alt="" />
          <div className="box__text">
            <h3 className="box__down-header">You are not alone!</h3>
            <p className="box__desc">
              Others like you struggle with the same frustrations.
            </p>
          </div>
          <div className="box__container">
            <button className="action-buttons__button action-buttons__button--cancel">
              Cancel
            </button>
            <button
              className="action-buttons__button action-buttons__button--continue"
              disabled={this.state.feeling ? false : true}
              onClick={this.props.finishJournalEntry}
            >
              Continue
            </button>
          </div>
        </section>
      </article>
    );
  }
}

export default FeelingBox;
