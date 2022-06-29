import axios from "axios";
import { Fragment, React, useEffect, useState, useContext } from "react";
import { TestContext } from "../context/TestContext";
import PostItem from "./PostItem";

function Posts() {
  const { test, setTest } = useContext(TestContext);
  const [posts, getPosts] = useState([]);

  const getAllPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const allPosts = response.data;
        getPosts(allPosts);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Fragment>
      <div className="container" style={{ marginTop: test }}>
        <div className="row">
          {posts.map((post, id) => {
            return <PostItem key={id} title={post.title} body={post.body} />;
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default Posts;
