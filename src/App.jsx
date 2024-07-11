import {Route, Routes} from 'react-router-dom';
import LogInPage from './pages/auth/LogInPage/LogInPage';
import SignUpPage from './pages/auth/SingUpPage/SignUpPage';
import MailConfirmationPage from "./pages/auth/MailConfirmationPage/MailConfirmationPage";
import PasswordResetPage from "./pages/auth/PasswordResetPage/PasswordResetPage";
import * as PATHS from './routes/routes.js';
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path={PATHS.SIGN_UP_PATH} element={<SignUpPage/>}/>
        <Route path={PATHS.LOG_IN_PATH} element={<LogInPage/>}/>
        <Route path={PATHS.MAIL_CONFIRMATION_PATH} element={<MailConfirmationPage/>}/>
        <Route path={PATHS.PASSWORD_RESET_PATH} element={<PasswordResetPage/>}/>
      </Routes>
    </>
  );
}

export default App;
