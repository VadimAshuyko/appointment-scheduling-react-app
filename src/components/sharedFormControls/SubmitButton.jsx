import {useFormContext} from 'react-hook-form';
import styles from './SubmitButton.module.css';

const SubmitButton = ({text, isValid = true}) => {
  const {formState: {isSubmitting, isValid: isContextValid}} = useFormContext();

  return (
    <>
      <button type="submit" disabled={!isValid || !isContextValid || isSubmitting} className={styles.submitBtn}>
        {text}
      </button>
    </>
  );
};

export default SubmitButton;
