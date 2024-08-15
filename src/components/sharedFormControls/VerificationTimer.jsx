import {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import styles from './VerificationTimer.module.css';

const VerificationTimer = ({initialSeconds, onTimerComplete}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const {t} = useTranslation();

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds - 1 === 0) {
            clearInterval(interval);
          }
          return prevSeconds - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    } else {
      onTimerComplete(false);
    }
  }, [seconds, onTimerComplete]);

  return (
    <div className={styles.timerDiv}>
      <p>{t('you can request the code again')} {seconds} {t('seconds')}</p>
    </div>
  );
};

export default VerificationTimer;
