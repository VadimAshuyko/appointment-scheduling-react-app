import {useTranslation} from 'react-i18next';
import AuthHeader from '../../components/headers/AuthHeader';
import SignInForm from '../../components/forms/SignInForm';
import styles from './AuthPages.module.css';
import {SIGN_UP_PATH} from '../../routes/routes.js';

const SignInPage = () => {
  const {t} = useTranslation();

  return (
    <>
      <div className={styles.mainContainer}>
        <AuthHeader path={SIGN_UP_PATH} text={t('sign-up')}></AuthHeader>
        <div className={styles.formContainer}>
          <SignInForm></SignInForm>
        </div>
        <div className={styles.footerContainer}>
          {/* TODO implement Footer */}
        </div>
      </div>
    </>
  );
};

export default SignInPage;
