import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss'
function Article() {
  const { articleId } = useParams(); 
  const location = useLocation(); 
    const article = location.state;
     console.log(article) // прилетает с пропсов
    console.log(location); // по суте контекст 
  const navigate = useNavigate();
  
  if (!article) {
    return <h1>Article not found</h1>;
  }
   const handleBackClick = () => { // бурет прямую ссылку на url endpoint
     navigate('/articles');
   };
  return (
    <div className={styles.articleContainer}>
      <h1>
        Article {articleId}
      </h1>
      <p>{article.content}</p>
      <button onClick={handleBackClick}>Back to Articles</button>
    </div>
  );
}

export default Article;
