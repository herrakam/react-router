import React, { useEffect } from "react";

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push("/");
  };

  const replaceToHome = () => {
    history.replace("/");
  };
  useEffect(() => {
    console.log(history);
    const unblock = history.block("정말 떠남?");
    return () => {
      unblock();
    };
  }, [history]);
  return (
    <div>
      <button onClick={goBack}>뒤로</button>
      <button onClick={goHome}>홈</button>
      <button onClick={replaceToHome}>홈(replace)</button>
    </div>
  );
}

export default HistorySample;
