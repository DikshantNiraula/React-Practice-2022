import React, { Fragment } from "react";

function TodoItem({ data, deleteTodoItem }) {
  const { id, title, completed } = data;
  //   console.log(props);
  return (
    <Fragment>
      <div className="row" id="todo-container">
        <div className="col col-12 p-2 todo-item">
          <div className="input-group d-flex items-center justify-center">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  //   value={completed}
                  //   onChange={() => completedCheck(id)}
                  defaultChecked={completed}
                />
              </div>
            </div>
            <div>
              {completed ? (
                <span
                  className="px-4 py-4"
                  style={{ textDecoration: "line-through" }}
                >
                  {title}
                </span>
              ) : (
                <span className="px-4 py-4">{title}</span>
              )}
            </div>
            <div className="input-group-append">
              <a
                className="btn btn-danger text-white btn-sm"
                style={{ float: "right" }}
                type="button"
                onClick={() => deleteTodoItem(id)}
              >
                X
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TodoItem;
