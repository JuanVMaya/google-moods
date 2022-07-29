import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage";
import "./App.scss";

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
