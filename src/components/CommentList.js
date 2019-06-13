import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
  const commentNodes = props.data.map((comment) => (
    <Comment
      author={comment.author}
      key={comment.id} 
      onRemoveComment={(comment) => removeComment(props, comment)}
    >
    {comment.text}
    </Comment>
  ));
  return (
    <div className="CommentList">
      {commentNodes}
    </div>
  );
};

const removeComment = (props, comment) =>
  props.onRemoveComment(comment);

export default CommentList;
