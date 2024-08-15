import {useTranslation} from 'react-i18next';
import {useLocation} from 'react-router-dom';
import EmailVerificationForm from '../../components/forms/EmailVerificationForm';
import AuthHeader from '../../components/headers/AuthHeader';
import styles from './AuthPages.module.css';
import {SIGN_IN_PATH} from '../../routes/routes.js';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const EmailVerificationPage = () => {
  const query = useQuery();
  const context = query.get('context');
  const {t} = useTranslation();

  return (
    <>
      <div className={styles.mainContainer}>
        <AuthHeader path={SIGN_IN_PATH} text={t('sign-in')}></AuthHeader>
        <div className={styles.formContainer}>
          <EmailVerificationForm context={context}></EmailVerificationForm>
        </div>
        <div className={styles.footerContainer}>
          {/* TODO implement Footer */}
        </div>
      </div>
    </>
  );
};

export default EmailVerificationPage;
