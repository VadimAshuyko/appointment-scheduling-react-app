import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';
import {emailValidation, passwordValidation} from '../../validationRules/authValidation';
import {useSignInMutation} from '../../services/authService';
import {getErrorText} from '../../services/api/apiErrorHandler';
import FormContainer from '../sharedFormControls/FormContainer';
import InputField from '../sharedFormControls/InputField';
import PasswordInputField from '../sharedFormControls/PasswordInputField';
import SubmitButton from '../sharedFormControls/SubmitButton';
import styles from '../sharedFormControls/InputField.module.css';
import {APPOINTMENT_TYPES_PATH, SIGN_UP_PATH} from '../../routes/routes';
import {PASSWORD_RESET_PATH} from '../../routes/routes';

const SignInForm = () => {
  const [signIn, {isLoading, isSuccess, isError, error}] = useSignInMutation();
  const navigate = useNavigate();
  const {t} = useTranslation();
  const handleLogIn = async (credentials) => {
    await signIn(credentials);
  };

  const methods = useForm({
    mode: 'onChange'
  });

  useEffect(() => {
    if (isSuccess) {
      navigate(APPOINTMENT_TYPES_PATH);
    }
  }, [isSuccess, navigate]);

  return (
    <>
      <fieldset disabled={isLoading} className={styles.fieldsetDisabled}>
        <FormContainer formProps={
          {
            label: t('sign-in auth label'),
            onSubmit: handleLogIn,
            methods: methods
          }
        } navigationProps={[
          {path: PASSWORD_RESET_PATH + '?context=init', text: t('reset password')},
          {path: SIGN_UP_PATH, text: t('dont have an account')}
        ]}>
          <InputField inputProps={
            {
              type: 'email',
              label: t('email auth label'),
              name: 'email',
              id: 'email',
              placeholder: t('email placeholder'),
              autocomplete: 'off',
              validation: emailValidation
            }
          }>
          </InputField>
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
          {isError && <span className={styles.errorMessage}>{t(getErrorText('signIn', error))}</span>}
        </FormContainer>
      </fieldset>
    </>
  );
};

export default SignInForm;
