import React, { Fragment, useState } from "react";
import Toastr from "../Toastr/Toastr";

function Counter() {
  const [like, setLike] = useState(0);
  const [isError, setIsError] = useState(0);

  const Like = (e) => {
    setLike(like + 1);
  };

  const Unlike = (e) => {
    if (like > 0) setLike(like - 1);
    if (like <= 0) {
      setIsError(1);
      console.log(isError);
    }
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

      {isError == 1 ? <Toastr errorType="error" /> : ""}
    </Fragment>
  );
}

export default Counter;
