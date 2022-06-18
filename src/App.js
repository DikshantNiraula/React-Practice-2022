import { Fragment } from "react";
import Posts from "./Components/posts/Posts";
import Counter from "./Components/StateUpdate/Counter";
function App() {
  return (
    <Fragment>
      <center style={{ marginTop: "100px" }}>
        {/* <Posts /> */}
        <Counter />
      </center>
    </Fragment>
  );
}

export default App;
