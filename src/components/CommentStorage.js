const CommentStorage = {
  get STORAGE_KEY() {
    return 'react-comment-list-16.8';
  },
  fetch() {
    const comments = JSON.parse(localStorage.getItem(CommentStorage.STORAGE_KEY) || '[]');
    comments.forEach((comment, index) =>
      comment.id = index
    );
    return comments;
  },
  save(comments) {
    localStorage.setItem(CommentStorage.STORAGE_KEY, JSON.stringify(comments));
  }
};

export default CommentStorage;
