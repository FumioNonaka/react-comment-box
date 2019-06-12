import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
  const commentNodes = props.data.map((comment, id) =>
  (
    <Comment author={comment.author} key={id}>
    {comment.text}
    </Comment>
  )
);
return (
    <div className="CommentList">
      {commentNodes}
    </div>
  );
};

export default CommentList;
