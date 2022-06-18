import axios from "axios";
import { Fragment, React, useEffect, useState } from "react";
import PostItem from "./PostItem";

function Posts() {
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
      <div className="container" style={{ marginTop: "100px" }}>
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
