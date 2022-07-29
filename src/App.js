import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, useHistory  } from "react-router-dom";
import LoginPage from "./Pages/SignInPage/SignInPage";

function App() {
  const [count, setCount] = useState(0);
  const handleCountUp = () => {
    setCount(count - 1);
  };


  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login" exact component={LoginPage}
        />


      </Switch>
    </BrowserRouter>
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
