import React from 'react';
import marked from 'marked';

const Comment = (props) => {
  return (
    <div className="Comment">
      <h2 className="CommentAuthor">
      {props.author}
      </h2>
      <div className="CommentText">
        <span dangerouslySetInnerHTML={rawMarkup(props.children.toString())} />
        <button type="button" onClick={() => handleClick(props)}>削除</button>
      </div>
    </div>
  );
};

const rawMarkup = (markup) => {
  const rawMarkup = marked(markup);
  return { __html: rawMarkup };
};

const handleClick = (props) => {
  props.onRemoveComment({
    author: props.author,
    text: props.children.toString()
  });
};

export default Comment;
