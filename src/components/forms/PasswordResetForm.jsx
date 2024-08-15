import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';
import {passwordValidation} from '../../validationRules/authValidation';
import {useResetPasswordMutation} from '../../services/userService';
import {getErrorText} from '../../services/api/apiErrorHandler';
import PasswordInputField from '../sharedFormControls/PasswordInputField';
import SubmitButton from '../sharedFormControls/SubmitButton';
import FormContainer from '../sharedFormControls/FormContainer';
import styles from '../sharedFormControls/InputField.module.css';
import {SIGN_IN_PATH, SIGN_UP_PATH} from '../../routes/routes';

const PasswordResetForm = () => {
  const [resetPassword, {isLoading, isSuccess, isError, error}] = useResetPasswordMutation();
  const navigate = useNavigate();
  const {t} = useTranslation();
  const userEmail = localStorage.getItem('userEmail');

  const methods = useForm({
    mode: 'onChange'
  });

  const handleResetPassword = async (data) => {
    await resetPassword(data);
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.removeItem('isEmailVerified');
      navigate(SIGN_IN_PATH);
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (isError && error.status === 401) {
      navigate(SIGN_IN_PATH);
    }
  }, [isError, error, navigate]);

  return (
    <>
      <fieldset disabled={isLoading} className={styles.fieldsetDisabled}>
        <FormContainer formProps={
          {
            label: t('password reset label'),
            onSubmit: handleResetPassword,
            methods: methods,
            description: t('password reset for') + ' ' + userEmail
          }
        } navigationProps={[
          {path: -1, text: t('get back')},
          {path: SIGN_UP_PATH, text: t('dont have an account')}
        ]}
        >
          <PasswordInputField inputProps={
            {
              label: t('password auth label'),
              name: 'password',
              id: 'password',
              placeholder: t('password placeholder'),
              autocomplete: 'off',
              validation: passwordValidation
            }
          }>
          </PasswordInputField>
          <SubmitButton text={t('auth btn text')}></SubmitButton>
          {isError && <span className={styles.errorMessage}>{t(getErrorText('resetPassword', error))}</span>}
        </FormContainer>
      </fieldset>
    </>
  )
};

export default PasswordResetForm;
