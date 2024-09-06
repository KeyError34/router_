import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const articles = [
  {
    id: 1,
    title: 'First Article',
    content: 'This is the first article content.',
  },
  {
    id: 2,
    title: 'Second Article',
    content: 'This is the second article content.',
  },
  {
    id: 3,
    title: 'Third Article',
    content: 'This is the third article content.',
  },

];

function Articles() {

  return (
    <div className={styles.articlesContainer}>
      <h1>Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            {/* Передача объекта статьи через state */}
            <Link

               className={styles.articlLin}
              to={`/article/${article.title}/${article.id}`}
              state={article}
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Articles;
