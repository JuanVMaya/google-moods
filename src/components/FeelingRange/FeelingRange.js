import "./FeelingRange.scss";

function FeelingRange({ selectSeverity }) {
  const handleSelectSeverity = () => {
    //Ideally we would pass a severity value. We will not set a value for demo purposes
    selectSeverity();
  };
  return (
    <section className="feeling-range">
      <h1 className="feeling-range__title">What is the level of severity?</h1>
      <div className="feeling-range__radiobuttons">
        <p>Mild</p>
        <div className="feeling-range__value feeling-range__value--1">
          <input
            className="feeling-range__color--1"
            type="radio"
            name="range"
            value="mild"
          ></input>
          <label for="radio-1">1</label>
        </div>
        <div className="feeling-range__value feeling-range__value--2">
          <input
            className="feeling-range__color--2"
            type="radio"
            name="range"
            value="moderate"
          ></input>
          <label for="radio-2">2</label>
        </div>
        <div
          className="feeling-range__value  feeling-range__value--3"
          onClick={handleSelectSeverity}
        >
          <input
            className="feeling-range__color--3"
            type="radio"
            name="range"
            value="severe"
          ></input>
          <label for="radio-3">3</label>
        </div>
        <div
          className="feeling-range__value feeling-range__value--4"
          onClick={handleSelectSeverity}
        >
          <input
            className="feeling-range__color--4"
            type="radio"
            name="range"
            value="profound"
          ></input>
          <label for="radio-4">4</label>
        </div>
        <p>Extreme</p>
      </div>
    </section>
  );
}

export default FeelingRange;
