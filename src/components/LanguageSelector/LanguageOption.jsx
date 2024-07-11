import {useTranslation} from 'react-i18next';
import styles from './LanguageOption.module.css';

const LanguageOption = ({children}) => {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <>
      <button className={styles.languageOptionBtn} onClick={() => {
        changeLanguage(children)
      }}>
        <span className={styles.languageOption}>
        {t(children)}
        </span>
      </button>
    </>
  );
}

export default LanguageOption;