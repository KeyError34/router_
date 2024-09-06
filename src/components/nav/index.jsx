import { Link } from 'react-router-dom';
import styles from './styles.module.scss'
function Nav() {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
