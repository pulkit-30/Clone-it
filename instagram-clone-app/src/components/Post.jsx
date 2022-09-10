import React, { useState } from "react";
import { Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useEffect } from "react";
import { db } from "../firebase";
import firebase from "../firebase";
function Post(props) {
  const [comment, setcomment] = useState("");
  const [comments, setPostcomments] = useState([]);
  function updateComment(event) {
    setcomment(event.target.value);
  }
  function handelComments(event) {
    event.preventDefault();
    db.collection("Posts").doc(props.id).collection("Comments").add({
      userName: props.username,
      Comment: comment,
    });
    setcomment("");
  }
  useEffect(() => {
    if (props.id) {
      let unsubscribe = db
        .collection("Posts")
        .doc(props.id)
        .collection("Comments")
        .onSnapshot((snapshot) => {
          setPostcomments(snapshot.docs.map((doc) => doc.data()));
        });
      return () => {
        unsubscribe();
      };
    }
  }, [props.id]);

  return (
    <div>
      <div className="post">
        <div className="userDetail flex">
          <span>
            <AccountCircleIcon />
          </span>
          {props.userdetail}&nbsp;
        </div>
        <div className="content">
          <img src={props.image} alt="post" />
        </div>
        <div className="buttons flex">
          <i className="far fa-heart"></i>
          <i className="far fa-comment"></i>
          <i className="far fa-paper-plane"></i>
        </div>
        <div className="caption">
          <span className="blue">@{props.userdetail}</span> &nbsp;
          {props.caption.slice(0, 500)}
        </div>
        <br />
        <div className="comments">
          {comments.map((pcomment) => {
            return (
              <div>
                <span className="blue">@{pcomment.userName}:</span>
                {pcomment.Comment}
              </div>
            );
          })}
        </div>

        <div className="comment-box">
          <form onSubmit={handelComments}>
            <input
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={updateComment}
            />
            <Button
              type="submit"
              color="primary"
              className="btn"
              disabled={!comment}
            >
              Post
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Post;
