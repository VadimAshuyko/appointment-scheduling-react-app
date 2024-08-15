import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useVerifyEmailMutation} from '../../services/authService';
import {useResendCodeMutation} from '../../services/authService';
import {getErrorText} from '../../services/api/apiErrorHandler';
import VerificationTimer from '../sharedFormControls/VerificationTimer';
import VerificationCodeInput from '../sharedFormControls/VerificationCodeInput';
import SubmitButton from '../sharedFormControls/SubmitButton';
import FormContainer from '../sharedFormControls/FormContainer';
import styles from './EmailVerificationForm.module.css';
import {APPOINTMENT_TYPES_PATH, PASSWORD_RESET_PATH} from '../../routes/routes';

const EmailVerificationForm = ({context}) => {
  const [verifyEmail, {
    isLoading: isVerifyLoading,
    isSuccess: isVerifySuccess,
    isError: isVerifyError,
    error: verifyError
  }] = useVerifyEmailMutation();
  const [resendCode, {
    isLoading: isResendLoading,
    isSuccess: isResendSuccess,
    isError: isResendError,
    error: resendError
  }] = useResendCodeMutation();
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      digit1: '',
      digit2: '',
      digit3: '',
      digit4: '',
      digit5: '',
      digit6: '',
    },
    criteriaMode: "all"
  });

  const {control, formState: {isValid}} = methods;

  const navigate = useNavigate();
  const {t} = useTranslation();
  const userEmail = localStorage.getItem('unverifiedEmail');

  let currentTimestampInMilliseconds = Date.now();
  let currentTimestampInSeconds = Math.floor(currentTimestampInMilliseconds / 1000);

  let verificationTimestamp = localStorage.getItem('verificationTimestamp');
  let timeLeft;

  if (verificationTimestamp === null) {
    localStorage.setItem('verificationTimestamp', (currentTimestampInSeconds + 60).toString());
    timeLeft = 60;
  } else {
    timeLeft = parseInt(verificationTimestamp, 10) - currentTimestampInSeconds;
  }

  const [isTimerActive, setTimerActive] = useState(timeLeft > 0);

  const handleVerify = async (data) => {
    const secretCode = Object.values(data).join('');
    await verifyEmail({
      secretCode: secretCode
    });
  };

  const handleResend = async () => {
    await resendCode({
      userEmail: userEmail
    });
  };

  const handleTimerComplete = (data) => {
    setTimerActive(data);
  };

  const handleNavigateBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (isVerifySuccess) {
      localStorage.removeItem('unverifiedEmail');
      localStorage.setItem('userEmail', userEmail);
      localStorage.setItem('isEmailVerified', String(true));
      if (context === 'sign-up') {
        navigate(APPOINTMENT_TYPES_PATH);
      } else if (context === 'password-reset') {
        navigate(PASSWORD_RESET_PATH);
      }
      //TODO else navigate(404 NotFound page)
    }
  }, [isVerifySuccess, navigate, userEmail, context]);

  useEffect(() => {
    if (isResendSuccess) {
      let currentTimestampInMilliseconds = Date.now();
      let currentTimestampInSeconds = Math.floor(currentTimestampInMilliseconds / 1000);
      localStorage.setItem('verificationTimestamp', (currentTimestampInSeconds + 60).toString());
      setTimerActive(true);
    }
  }, [isResendSuccess]);

  return (
    <fieldset disabled={isVerifyLoading || isResendLoading} className={styles.fieldsetDisabled}>
      <FormContainer formProps={
        {
          label: t('email verification'),
          onSubmit: handleVerify,
          methods: methods,
          description: t('we have sent a verification code to') + ' ' + userEmail
        }
      }
      >
        <VerificationCodeInput control={control}/>
        {isTimerActive && <VerificationTimer initialSeconds={timeLeft} onTimerComplete={handleTimerComplete}/>}
        <SubmitButton text={t('verify')} isValid={isValid}></SubmitButton>
        {isVerifyError && <span className={styles.errorMessage}>{t(getErrorText('verifyEmail', verifyError))}</span>}
        {isResendError && <span className={styles.errorMessage}>{t(getErrorText('resendCode', resendError))}</span>}
        <div className={styles.optionsDiv}>
          <button className={styles.returnBackBtn} onClick={handleNavigateBack}>
            {t('get back')}
          </button>
          {!isTimerActive && (
            <button className={styles.resendBtn} onClick={handleResend}>
              {t('resend code')}
            </button>
          )}
        </div>
      </FormContainer>
    </fieldset>
  );
};

export default EmailVerificationForm;
