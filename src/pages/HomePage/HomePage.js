import Feelings from "../../components/Feelings/Feelings";
import FeelingRange from "../../components/FeelingRange/FeelingRange";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <article className="homepage">
      <h1>Search Bar</h1>
      <Feelings />
      <FeelingRange />
    </article>
  );
};

export default HomePage;
