import React, { Fragment } from "react";

function PostItem(props) {
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
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PostItem;
