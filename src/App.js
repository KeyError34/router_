
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './pages/home';
import Article from './pages/article';
import Articles from './pages/articles';
function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:articleTitle/:articleId" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
