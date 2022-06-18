import React, { Fragment } from "react";

function TodoCount({ count }) {
  return (
    <Fragment>
      <span className="badge bg-success">Total Todos: {count ? count : 0}</span>
    </Fragment>
  );
}

export default TodoCount;
