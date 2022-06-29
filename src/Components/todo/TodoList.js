import React, { Fragment, useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import axios from "axios";
import TodoCount from "./TodoCount";

function TodoList() {
  const [todoitems, setTodoItem] = useState([]);
  const [todocount, setTodoCount] = useState(0);

  const getAllTodos = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const data = res.data;
      setTodoItem(data);
      setTodoCount(data.length);
    });
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const deleteTodoItem = (item) => {
    // alert("ok");
    // return "ok";
    console.log(item);

    setTodoItem(todoitems.filter((todoitem) => todoitem.id !== item));
    setTodoCount(todocount - 1);
  };

  const addTodoItem = (newTodo) => {
    console.log(newTodo);
    setTodoItem([newTodo, ...todoitems]);
    setTodoCount(todocount + 1);
  };

  const completedCheck = (item) => {
    // console.log(item);
    let completedItem = todoitems[item.id];
    // console.log(completedItem.completed);
    // setTodoItem({ ...completedItem, ...(completedItem.completed = true) });
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center align-items-center main-row">
          <div className="col-md-6 shadow main-col bg-white">
            <div className="row bg-secondary text-white">
              <div className="col  p-2">
                <h4>Todo App</h4>
              </div>
            </div>
            <AddTodo addTodoItem={addTodoItem} />
            <TodoCount count={todocount} />
            {todoitems.map((todoitem) => {
              return (
                <TodoItem
                  key={todoitem.id}
                  data={todoitem}
                  deleteTodoItem={deleteTodoItem}
                  completedCheck={completedCheck}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TodoList;
