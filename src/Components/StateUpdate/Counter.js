import React, { Fragment, useState } from "react";

function Counter() {
  const [like, setLike] = useState(0);

  const Like = (e) => {
    setLike(like + 1);
  };

  const Unlike = (e) => {
    if (like > 0) setLike(like - 1);
    if (like <= 0) console.log("cannot unlike");
  };

  return (
    <Fragment>
      <p>{like}</p>
      <button
        onClick={Like}
        className="btn btn-primary"
        style={{ marginRight: "10px" }}
      >
        {" "}
        Like Me
      </button>
      <button onClick={Unlike} className="btn btn-danger">
        {" "}
        Unlike Me
      </button>
    </Fragment>
  );
}

export default Counter;
