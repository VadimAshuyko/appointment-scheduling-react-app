import {useTranslation} from 'react-i18next';
import SignUpForm from '../../components/forms/SignUpForm';
import AuthHeader from '../../components/headers/AuthHeader';
import styles from './AuthPages.module.css';
import {SIGN_IN_PATH} from '../../routes/routes.js';

const SignUpPage = () => {
  const {t} = useTranslation();

  return (
    <>
      <div className={styles.mainContainer}>
        <AuthHeader path={SIGN_IN_PATH} text={t('sign-in')}></AuthHeader>
        <div className={styles.formContainer}>
          <SignUpForm></SignUpForm>
        </div>
        <div className={styles.footerContainer}>
          {/* TODO implement Footer */}
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
