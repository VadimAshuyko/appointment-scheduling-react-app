import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';
import {emailValidation} from '../../validationRules/authValidation';
import {useInitPasswordResetMutation} from '../../services/authService';
import {getErrorText} from '../../services/api/apiErrorHandler';
import FormContainer from '../sharedFormControls/FormContainer';
import InputField from '../sharedFormControls/InputField';
import SubmitButton from '../sharedFormControls/SubmitButton';
import styles from '../sharedFormControls/InputField.module.css';
import {EMAIL_VERIFICATION_PATH, SIGN_UP_PATH} from '../../routes/routes';

const InitPasswordResetForm = () => {
  const [initPasswordReset, {isLoading, isSuccess, isError, error}] = useInitPasswordResetMutation();
  const navigate = useNavigate();
  const {t} = useTranslation();

  const methods = useForm({
    mode: 'onChange'
  });

  const handleConfirm = async (data) => {
    await initPasswordReset(data.email);
    localStorage.setItem('unverifiedEmail', data.email);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(EMAIL_VERIFICATION_PATH + '?context=password-reset');
    }
  }, [isSuccess, navigate]);

  return (
    <>
      <fieldset disabled={isLoading} className={styles.fieldsetDisabled}>
        <FormContainer formProps={
          {
            label: t('password reset label'),
            onSubmit: handleConfirm,
            methods: methods
          }
        } navigationProps={[
          {path: -1, text: t('get back')},
          {path: SIGN_UP_PATH, text: t('dont have an account')}
        ]}
        >
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
          <SubmitButton text={t('auth btn text')}></SubmitButton>
          {isError && <span className={styles.errorMessage}>{t(getErrorText('initPasswordReset', error))}</span>}
        </FormContainer>
      </fieldset>
    </>
  )
};

export default InitPasswordResetForm;
