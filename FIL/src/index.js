import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // 以前作成したCSSファイルを指定
import App from './App.jsx'; // App.jsxを読み込む

// public/index.html の <div id="root"></div> を捕まえる
const root = ReactDOM.createRoot(document.getElementById('root'));

// rootの中にAppコンポーネントを表示するよう指示
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);