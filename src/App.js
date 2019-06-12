import React from 'react';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import './App.css';

function App() {
  const data = [
    {author: "ヘンリー・キッシンジャー", text: "チャンスは__貯金__できない。"},
    {author: "マーク・トウェイン", text: "禁煙なんてたやすい。私は*何千回*もやった。"}
  ];
  return (
    <div className="App">
      <h1>コメント</h1>
      <CommentList data={data} />
      <CommentForm />
    </div>
  );
}

export default App;
