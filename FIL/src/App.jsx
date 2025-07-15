import React from 'react';
import './App.css';
import PostList from './components/PostList.jsx'; // 作成したPostListをインポート

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React 文章投稿サイト</h1>
      </header>
      <main>
        {/* ここでPostListコンポーネントを表示 */}
        <PostList />
      </main>
    </div>
  );
}

export default App;
