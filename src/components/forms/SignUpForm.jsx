import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';
import {usernameValidation, emailValidation, passwordValidation} from '../../validationRules/authValidation';
import {useSignUpMutation} from '../../services/authService';
import {getErrorText} from '../../services/api/apiErrorHandler';
import FormContainer from '../sharedFormControls/FormContainer';
import InputField from '../sharedFormControls/InputField';
import PasswordInputField from '../sharedFormControls/PasswordInputField';
import SubmitButton from '../sharedFormControls/SubmitButton';
import styles from '../sharedFormControls/InputField.module.css';
import {EMAIL_VERIFICATION_PATH, SIGN_IN_PATH} from '../../routes/routes';

const SignUpForm = () => {
  const [signUp, {isLoading, isSuccess, isError, error}] = useSignUpMutation();
  const navigate = useNavigate();
  const {t} = useTranslation();

  const methods = useForm({
    mode: 'onChange'
  });

  const handleSingUp = async (data) => {
    await signUp(data);
    localStorage.setItem('unverifiedEmail', data.email);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(EMAIL_VERIFICATION_PATH + '?context=sign-up');
    }
  }, [isSuccess, navigate]);

  return (
    <>
      <fieldset disabled={isLoading} className={styles.fieldsetDisabled}>
        <FormContainer formProps={
          {
            label: t('sign-up auth label'),
            onSubmit: handleSingUp,
            methods: methods
          }
        } navigationProps={[
          {path: SIGN_IN_PATH, text: t('already have an account')}
        ]}>
          <InputField inputProps={
            {
              type: 'text',
              label: t('username auth label'),
              name: 'username',
              id: 'username',
              placeholder: t('username placeholder'),
              autocomplete: 'off',
              validation: usernameValidation
            }
          }>
          </InputField>
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
          {isError && <span className={styles.errorMessage}>{t(getErrorText('signUp', error))}</span>}
        </FormContainer>
      </fieldset>
    </>
  );
};

export default SignUpForm;
