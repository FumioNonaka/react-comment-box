import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {author: '', text: ''};
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAuthorChange(event) {
    this.setState({author: event.target.value});
  }
  handleTextChange(event) {
    this.setState({text: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onCommentSubmit({author: this.state.author, text: this.state.text});
    this.setState({author: '', text: ''});
  }
  render() {
    return (
      <form className="CommentForm"  onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="名前"
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />
          <input
            type="text"
            placeholder="コメントを入力"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <input type="submit" value="送信" />
        </form>
    );
  }
};

export default CommentForm;
