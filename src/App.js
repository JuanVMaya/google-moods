import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.js";

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}>
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
