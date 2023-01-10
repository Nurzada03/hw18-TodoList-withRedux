import { useState } from "react";
import "./App.css";
import PostList from "./components/postList/PostList";

const DUMMY_POSTS = [
  { id: 1, title: "js", body: "description" },
  { id: 2, title: "Next.js", body: "description 2" },
  { id: 3, title: "React", body: "description 3" },
];

function App() {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <div className="App">
      <div>
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default App;
