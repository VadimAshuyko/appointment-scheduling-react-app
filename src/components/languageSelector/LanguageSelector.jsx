import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ReactComponent as GlobeIcon} from '../../assets/icons/i18n-icon.svg';
import {ReactComponent as ArrowIcon} from '../../assets/icons/arrow-down-icon.svg';
import LanguageOption from './LanguageOption';
import styles from './LanguageSelector.module.css';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {t, i18n} = useTranslation();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.langSelectContainer}>
        <button className={styles.langSelectBtn} onClick={toggleDropdown}>
          <div className={styles.langSelectDiv}>
            <GlobeIcon className={styles.globeIcon}></GlobeIcon>
            <span>
              {t(i18n.language)}
            </span>
            <ArrowIcon className={`${styles.arrowIcon} ${isOpen && styles.arrowUp}`}></ArrowIcon>
          </div>
        </button>
        {isOpen && (
          <div className={styles.dropdownDiv}>
            <div className={styles.innerDropdownDiv}>
              <LanguageOption lng={'en-EN'} label={'english lng'} setIsOpen={setIsOpen}></LanguageOption>
              <LanguageOption lng={'ru-RU'} label={'russian lng'} setIsOpen={setIsOpen}></LanguageOption>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageSelector;
