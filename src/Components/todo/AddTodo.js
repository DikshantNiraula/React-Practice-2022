import React, { Fragment, useState } from "react";

function AddTodo({ addTodoItem }) {
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();
    if (!title) return;
    addTodoItem({ title: title, id: Math.floor(Math.random() * 1000) });
    setTitle("");
  };

  return (
    <Fragment>
      <div className="row justify-content-between text-white p-2">
        <form onSubmit={handleSubmit}>
          <div className="form-group flex-fill mb-2">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Add New Todo"
              value={title}
              onChange={handleOnChange}
            />
          </div>
          <div className="float-right">
            <button type="submit" className="btn btn-primary mb-2 ml-2">
              Add todo
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default AddTodo;
