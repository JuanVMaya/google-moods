import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage/HomePage";
import "./App.scss";
import "./components/FeelingBox/FeelingBox";
import FeelingBox from "./components/FeelingBox/FeelingBox";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage}>
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
