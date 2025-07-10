import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // APIに新しい投稿データを送信
    axios.post('http://localhost:3001/posts', { title, content })
      .then(() => {
        // 投稿が成功したらトップページに戻る
        navigate('/');
      })
      .catch(error => {
        console.error('投稿に失敗しました', error);
      });
  };

  return (
    <div>
      <h2>新規投稿</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>タイトル:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>内容:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">投稿する</button>
      </form>
    </div>
  );
}

export default PostForm;