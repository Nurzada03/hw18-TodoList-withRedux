import React from "react";

const PostItem = ({ item }) => {
  return (
    <div className="post">
      <div className="postContant">
        <strong>
          {item.id}.{item.title}
        </strong>
        <div>{item.body}</div>
      </div>
      <div className="posts_btn">Delete</div>
    </div>
  );
};

export default PostItem;
