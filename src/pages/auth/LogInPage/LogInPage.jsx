import {useTranslation} from 'react-i18next';
import AuthHeader from '../../../components/AuthHeader/AuthHeader';
import {SIGN_UP_PATH} from '../../../routes/routes.js';
import styles from './LogInPage.module.css';

const LogInPage = () => {
  const {t} = useTranslation();

  return (
    <>
      <div className={styles.mainContainer}>
        <AuthHeader path={SIGN_UP_PATH}>{t('signup')}</AuthHeader>
      </div>
    </>
  );
}

export default LogInPage;