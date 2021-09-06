import React from "react";
import Profile from "./Profile";
import { NavLink, Route, withRouter } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";
function Profiles() {
  return (
    <div>
      <h3>사용자목록</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/jung"
            activeStyle={{ background: "black", color: "white" }}
            activeClassName="active"
          >
            jung
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/lee"
            activeStyle={{ background: "black", color: "white" }}
          >
            lee
          </NavLink>
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
