import { Fragment, useState, useContext } from "react";
import Contact from "./Components/pages/Contact";
import Posts from "./Components/posts/Posts";
import Counter from "./Components/StateUpdate/Counter";
import TodoList from "./Components/todo/TodoList";
import About from "./Components/pages/About";
import Home from "./Components/pages/Home";
import { Route, Link, Routes } from "react-router-dom";
import { ThemeContext } from "./Components/context/ThemeContext";

function App() {
  const { color, setColor } = useContext(ThemeContext);
  return (
    <>
      <center style={{ marginTop: "100px", backgroundColor: color }}>
        <Posts />
        {/* <Counter /> */}
        {/* <TodoList /> */}
      </center>

      {/* <div>
        <nav>
          <ul style={{ listStyle: "none", display: "flex" }}>
            <li className="list">
              <Link to="/">Home</Link>
            </li>
            <li className="list">
              <Link to="/about">About</Link>
            </li>
            <li className="list">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div> */}
    </>
  );
}

export default App;
