import {useTranslation} from 'react-i18next';
import {useLocation} from 'react-router-dom';
import AuthHeader from '../../components/headers/AuthHeader';
import InitPasswordResetForm from '../../components/forms/InitPasswordResetForm';
import PasswordResetForm from '../../components/forms/PasswordResetForm';
import styles from './AuthPages.module.css';
import {SIGN_UP_PATH} from '../../routes/routes.js';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const PasswordResetPage = () => {
  const query = useQuery();
  const context = query.get('context');
  const {t} = useTranslation();
  const isEmailVerified = JSON.parse(localStorage.getItem('isEmailVerified'));
  const userEmail = localStorage.getItem('userEmail');

  return (
    <>
      <div className={styles.mainContainer}>
        <AuthHeader path={SIGN_UP_PATH} text={t('sign-up')}></AuthHeader>
        <div className={styles.formContainer}>
          {context !== 'init' && userEmail !== 'null' && isEmailVerified ? <PasswordResetForm></PasswordResetForm> :
            <InitPasswordResetForm></InitPasswordResetForm>}
        </div>
        <div className={styles.footerContainer}>
          {/* TODO implement Footer */}
        </div>
      </div>
    </>
  );
};

export default PasswordResetPage;
