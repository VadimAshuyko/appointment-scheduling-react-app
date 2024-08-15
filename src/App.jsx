import {Route, Routes} from 'react-router-dom';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import EmailVerificationPage from './pages/auth/EmailVerificationPage';
import PasswordResetPage from './pages/auth/PasswordResetPage';
import './App.css';
import * as PATHS from './routes/routes.js';

const App = () => {
  return (
    <>
      <Routes>
        <Route path={PATHS.SIGN_UP_PATH} element={<SignUpPage/>}/>
        <Route path={PATHS.SIGN_IN_PATH} element={<SignInPage/>}/>
        <Route path={PATHS.EMAIL_VERIFICATION_PATH} element={<EmailVerificationPage/>}/>
        <Route path={PATHS.PASSWORD_RESET_PATH} element={<PasswordResetPage/>}/>
        {/* TODO implement AppointmentTypes page */}
        <Route path={PATHS.APPOINTMENT_TYPES_PATH} element={<SignUpPage/>}/>
        {/* TODO implement 404 NotFound page */}
      </Routes>
    </>
  );
};

export default App;
