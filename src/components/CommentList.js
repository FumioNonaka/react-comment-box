import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
  const commentNodes = props.data.map((comment) => (
    <Comment
      id={comment.id}
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

const removeComment = (props, id) =>
  props.onRemoveComment(id);

export default CommentList;
