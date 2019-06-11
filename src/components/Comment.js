import React from 'react';

const Comment = (props) => {
  return (
    <div className="Comment">
      <h2 className="CommentAuthor">
      {props.author}
      </h2>
      {props.children}
    </div>
  );
};

export default Comment;
