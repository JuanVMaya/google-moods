import BigCard from "../BigCard/BigCard";
import "./Disclaimer.scss";

const Disclaimer = () => {
  return (
    <BigCard className="card">
      <h3>Disclaimer - Google Moods</h3>
      <p>
        Our goal with this web application is to demonstrate our solution to
        Google's cross-disciplinary industry project. It only has one operation
        flow state and is not intended for real use.
      </p>
    </BigCard>
  );
};

export default Disclaimer;
