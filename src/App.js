import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./About";
import HistorySample from "./HistorySample";
import Home from "./Home";
import Profiles from "./Profiles";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="about">about</Link>
        </li>{" "}
        <li>
          <Link to="/profiles">프로필목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/profiles" component={Profiles}></Route>
        <Route path="/history" component={HistorySample}></Route>
        <Route
          render={({ location }) => (
            <div>
              <h2>404 not found</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
