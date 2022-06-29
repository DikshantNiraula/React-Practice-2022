import React, { Fragment, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

function PostItem(props) {
  const { color, setColor } = useContext(ThemeContext);

  useEffect(() => {
    setColor("yellow");
  });
  return (
    <Fragment>
      <div className="col-md-4 mb-5">
        <div className="card">
          <img
            src="https://random.imagecdn.app/500/150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.body}</p>
            <a className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PostItem;
