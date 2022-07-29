import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage/HomePage";
import "./App.scss";
import "./components/feelingBox/FeelingBox";
import feelingBox from "./components/feelingBox/FeelingBox";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={feelingBox}>
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
