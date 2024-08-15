import {useTranslation} from 'react-i18next';
import styles from './LanguageOption.module.css';

const LanguageOption = ({lng, label, setIsOpen}) => {
  const {t, i18n} = useTranslation();

  const selectLanguage = () => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <>
      <button className={styles.languageOptionBtn} onClick={selectLanguage}>
        <span className={styles.languageOption}>
        {t(label)}
        </span>
      </button>
    </>
  );
};

export default LanguageOption;
