import React from "react";
import Post from "./Post";
function Posts(props) {
  function displayPost(post) {
    return (
      <Post
        username={props.username}
        key={post.id}
        id={post.id}
        userdetail={post.data.user}
        caption={post.data.caption}
        image={post.data.image}
      />
    );
  }
  return <div className="posts">{props.posts.map(displayPost)}</div>;
}

export default Posts;
