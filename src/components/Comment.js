import React from 'react';
import marked from 'marked';

const Comment = (props) => {
  return (
    <div className="Comment">
      <h2 className="CommentAuthor">
      {props.author}
      </h2>
      <span dangerouslySetInnerHTML={rawMarkup(props.children.toString())} />
    </div>
  );
};

const rawMarkup = (markup) => {
  const rawMarkup = marked(markup);
  return { __html: rawMarkup };
}

export default Comment;
