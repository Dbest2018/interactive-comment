import "./App.css";

import Comment from "./components/comment/comment";
import { data } from "./api/data";

function App() {
  return (
    <div className="app">
      {data["comments"].map((comment) => (
        <Comment
          id={comment.id}
          name={comment.user.username}
          time={comment.createdAt}
          comment={comment.content}
          avatar={comment.user.image.png}
        />
      ))}
    </div>
  );
}

export default App;
