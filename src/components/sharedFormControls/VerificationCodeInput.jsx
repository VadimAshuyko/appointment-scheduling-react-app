import {useRef} from 'react';
import {Controller} from 'react-hook-form';
import styles from './VerificationCodeInput.module.css';

const VerificationCodeInput = ({control}) => {
  const digitRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const handleInput = (e, nextRef) => {
    const value = e.target.value.replace(/\D/g, '');
    e.target.value = value;
    if (value.length === 1 && nextRef) {
      nextRef.current.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text').replace(/\D/g, '');
    if (paste.length === 6) {
      paste.split('').forEach((char, index) => {
        const input = digitRefs[index].current;
        input.value = char;
        if (index < 5) {
          digitRefs[index + 1].current.focus();
        }
      });
    }
  };

  return (
    <div className={styles.inputsContainer} onPaste={handlePaste}>
      {digitRefs.map((ref, index) => (
        <Controller
          key={index}
          name={`digit${index + 1}`}
          control={control}
          rules={{required: true, validate: value => value.trim() !== ''}}
          render={({field}) => (
            <input
              {...field}
              ref={ref}
              type="tel"
              maxLength="1"
              autoComplete="off"
              onInput={e => handleInput(e, digitRefs[index + 1])}
              className={styles.inputField}
              pattern="[0-9]*"
            />
          )}
        />
      ))}
    </div>
  );
};

export default VerificationCodeInput;
