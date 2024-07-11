import {useTranslation} from 'react-i18next';
import AuthHeader from '../../../components/AuthHeader/AuthHeader';
import {LOG_IN_PATH} from '../../../routes/routes.js';
import styles from './MailConfirmationPage.module.css';

const MailConfirmationPage = () => {
  const {t} = useTranslation();

  return (
    <>
      <div className={styles.mainContainer}>
        <AuthHeader path={LOG_IN_PATH}>{t('login')}</AuthHeader>
      </div>
    </>
  );
}

export default MailConfirmationPage;