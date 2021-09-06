import React from "react";
import Profile from "./Profile";
import { Link, Route, withRouter } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";
function Profiles() {
  return (
    <div>
      <h3>사용자목록</h3>
      <ul>
        <li>
          <Link to="/profiles/jung">jung</Link>
        </li>
        <li>
          <Link to="/profiles/lee">lee</Link>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자 선택해주세요</div>}
      ></Route>
      <Route path="/profiles/:username" component={Profile}></Route>
      <WithRouterSample></WithRouterSample>
    </div>
  );
}

export default Profiles;
