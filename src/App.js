import React from 'react';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>コメント</h1>
      <CommentList />
      <CommentForm />
    </div>
  );
}

export default App;
