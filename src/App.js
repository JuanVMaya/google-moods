import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from './pages/HomePage/HomePage';
import FeelingRange from './components/FeelingRange/FeelingRange';

function App() {
  return (

    <FeelingRange />



    // <Router>
    //   <Switch>

    //     <Route path="/" exact component={HomePage}> </Route>
    //   </Switch>
    // </Router>

  );
}

export default App;
