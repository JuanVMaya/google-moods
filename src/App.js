import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage";
// import SignInPage from "./pages/SignInPage/SignInPage";
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
