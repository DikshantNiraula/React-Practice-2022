import { Fragment } from "react";
import Posts from "./Components/posts/Posts";
import Counter from "./Components/StateUpdate/Counter";
import TodoList from "./Components/todo/TodoList";
function App() {
  return (
    <Fragment>
      <center style={{ marginTop: "100px" }}>
        {/* <Posts /> */}
        {/* <Counter /> */}
        <TodoList />
      </center>
    </Fragment>
  );
}

export default App;
