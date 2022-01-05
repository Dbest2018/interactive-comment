import "./App.css";

import Comment from "./components/comment/Comment";
import { data } from "./api/data";
import ReplyComment from "./components/replyComment/ReplyComment";

function App() {
  const comments = data["comments"];
  return (
    <div className="app">
      {comments.map((comment) => (
        <>
          <Comment
            key={comment.id}
            name={comment.user.username}
            time={comment.createdAt}
            comment={comment.content}
            avatar={comment.user.image.png}
          />
          {comment.replies &&
            comment.replies.map((reply) => (
              <Comment
                key={reply.id}
                name={reply.user.username}
                time={reply.createdAt}
                comment={reply.content}
                avatar={reply.user.image.png}
                reply="reply"
              />
            ))}
        </>
      ))}

      {/* TODO: need to add reply to each comment if available TODO: need to add
      edit and delete function on each comment if the comment is from the
      current user. */}
      <ReplyComment />
    </div>
  );
}

export default App;
