import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {author: '', text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const input = event.target;
    const state = {[input.id]: input.value};
    this.setState(state);
  }
  handleSubmit(event) {
    event.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if (!author || !text) {
      this.setState({author: author, text: text});
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  }
  render() {
    return (
      <form className="CommentForm"  onSubmit={this.handleSubmit}>
          <input
            id="author"
            type="text"
            placeholder="名前"
            value={this.state.author}
            onChange={this.handleChange}
          />
          <input
            id="text"
            type="text"
            placeholder="コメントを入力"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" value="送信" />
        </form>
    );
  }
};

export default CommentForm;
