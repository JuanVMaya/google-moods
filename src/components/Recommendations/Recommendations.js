import BigCard from "../BigCard/BigCard";

const Recommendations = (props) => {
  return (
    <BigCard>
      <div>
        <h1>We are here for you</h1>
        <h3>
          Based on what you are feeling, we have found some resources and
          suggestions that may help you
        </h3>
      </div>
      <section>
        <button>5 ways to improve your mental health</button>
      </section>
      <div>
        <button>Cancel</button>
        <button>Continue</button>
      </div>
    </BigCard>
  );
};

export default Recommendations;
