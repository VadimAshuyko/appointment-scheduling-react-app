import {useState} from 'react';
import {useFormContext} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {ReactComponent as OpenedEyeIcon} from '../../assets/icons/opened-eye-icon.svg';
import {ReactComponent as ClosedEyeIcon} from '../../assets/icons/closed-eye-icon.svg';
import styles from './InputField.module.css';

const PasswordInputField = ({inputProps}) => {
  const {label, name, id, placeholder, autocomplete, validation} = inputProps;
  const [opened, setOpened] = useState(false);
  const {t} = useTranslation();
  const {register, formState: {errors}} = useFormContext();

  const onIconClick = () => {
    setOpened(!opened);
  };

  return (
    <>
      <div className={styles.inputDiv}>
        <label htmlFor={id} className={styles.inputLabel}>{label}</label>
        <div className={styles.inputWrapper}>
          <input type={opened ? 'text' : 'password'}
                 id={id}
                 placeholder={placeholder}
                 autoComplete={autocomplete}
                 {...register(name, validation)} className={styles.inputField}/>
          <div className={styles.iconWrapper} onClick={onIconClick}>
            {opened ? <OpenedEyeIcon className={styles.openedEyeIcon}/> :
              <ClosedEyeIcon className={styles.closedEyeIcon}/>}
          </div>
        </div>
        {errors[name] && <span className={styles.errorMessage}>{t(errors[name].message)}</span>}
      </div>
    </>
  );
};

export default PasswordInputField;
