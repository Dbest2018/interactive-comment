import "./App.css";

import Comment from "./components/comment/Comment";
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
      TODO: need to add reply to each comment if available TODO: need to add
      edit and delete function on each comment if the comment is from the
      current user.
    </div>
  );
}

export default App;
