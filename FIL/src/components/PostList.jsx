import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  // 投稿データを保存するための場所をstateとして用意
  const [posts, setPosts] = useState([]);

  // このコンポーネントが画面に表示された時に、一度だけ実行される処理
  useEffect(() => {
    // APIサーバーから投稿データを取得する
    axios.get('http://localhost:3001/posts')
      .then(response => {
        // 取得したデータをpostsに保存する
        setPosts(response.data);
      })
      .catch(error => {
        console.error('データの取得に失敗しました', error);
      });
  }, []); // []が空なので、最初の一回だけ実行される

  return (
    <div>
      <h2>投稿一覧</h2>
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;