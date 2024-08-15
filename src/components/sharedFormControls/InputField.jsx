import {useFormContext} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import styles from './InputField.module.css';

const InputField = ({inputProps}) => {
  const {type, label, name, id, placeholder, autocomplete, validation} = inputProps;
  const {t} = useTranslation();
  const {register, formState: {errors}} = useFormContext();

  return (
    <>
      <div className={styles.inputDiv}>
        <label htmlFor={id} className={styles.inputLabel}>{label}</label>
        <input type={type}
               id={id}
               placeholder={placeholder}
               autoComplete={autocomplete}
               {...register(name, validation)} className={styles.inputField}/>
        {errors[name] && <span className={styles.errorMessage}>{t(errors[name].message)}</span>}
      </div>
    </>
  );
};

export default InputField;
