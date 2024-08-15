import {useNavigate} from 'react-router-dom';
import LanguageSelector from '../languageSelector/LanguageSelector';
import styles from './AuthHeader.module.css';

const AuthHeader = ({path, text}) => {
  const navigate = useNavigate();

  const goToPath = () => {
    navigate(path);
  };

  return (
    <>
      <header className={styles.authHeader}>
        <nav className={styles.authNav}>
          <div className={styles.authDiv}>
            <LanguageSelector/>
            <div className={styles.authLinkDiv}>
              <button className={styles.authLinkBtn} onClick={goToPath}>
                {text}
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default AuthHeader;
