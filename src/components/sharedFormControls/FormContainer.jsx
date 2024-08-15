import {useNavigate} from 'react-router-dom';
import {FormProvider} from 'react-hook-form';
import styles from './FormContainer.module.css';

const FormContainer = ({formProps, navigationProps = [], children}) => {
  const {onSubmit, methods, label, description = ''} = formProps;
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.authForm}>
          <div className={styles.labelDiv}>
            {label}
          </div>
          {description &&
            <div className={styles.descriptionDiv}>
              {description}
            </div>
          }
          {children}
          {navigationProps.length !== 0 &&
            <div className={navigationProps.length > 1 ? styles.complexNavigationDiv : styles.navigationDiv}>
              {navigationProps.map((navItem, index) => (<button
                  key={index}
                  type="button"
                  className={navigationProps.length > 1 && index === 0 ? styles.specificNavigateBtn : styles.navigateBtn}
                  onClick={() => handleNavigation(navItem.path)}
                >
                  {navItem.text}
                </button>
              ))}
            </div>
          }
        </form>
      </FormProvider>
    </>
  );
};

export default FormContainer;
