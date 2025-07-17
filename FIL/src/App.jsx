import React from 'react';
import './App.css';
import PostList from './components/PostList.jsx'; // 作成したPostListをインポート

// ページのロード
import item_form from './item_form.js'

function App() {
  return (
    <div className="App">
      <nav>
        {/* Linkコンポーネントでページ遷移のリンクを作成します */}
        {/* 'to'属性で遷移先のパスを指定します */}
        <Link to="/">ホーム</Link>
        <Link to="/item_form.js">フォーム</Link>
      </nav>


      <header className="App-header">
        <h1>React 文章投稿サイト</h1>
      </header>
      <main>
        {/* ここでPostListコンポーネントを表示 */}
        <PostList />
          {/* Routesコンポーネントで、URLに応じた表示の切り替えを定義します */}
        <Routes>
          {/* Routeコンポーネントで、パスとコンポーネントを関連付けます */}
          <Route path="/" element={<Home />} />
          <Route path="/item_form.js" element={<item_form />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
