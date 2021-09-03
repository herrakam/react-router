import React from "react";
import qs from "qs";

function About({ location }) {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const detail = query.detail === "true"; //문자열로 가져와짐!!
  return (
    <div>
      <h1>소개</h1>
      <p>라우터 실습 예제 프로젝트</p>
      {detail && <p>디테일 값 true임</p>}
    </div>
  );
}

export default About;
