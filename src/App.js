import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage/HomePage";
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

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <p>This is the count down! {count}</p>
  //       <button onClick={handleCountUp}>Count down!</button>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
