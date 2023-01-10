import React from "react";
import PostItem from "../postItem/postItem";


const PostList = ({ posts }) => {
  return (
    <div>
      <h1>list of posts</h1>

      <div>
        {posts.map((post) => (
          <PostItem post={post}/>
          
        ))}
      </div>
    </div>
  );
};

export default PostList;
