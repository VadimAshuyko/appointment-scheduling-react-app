import {Route, Routes} from 'react-router-dom';
import LogInPage from './pages/auth/LogInPage/LogInPage';
import SignUpPage from './pages/auth/SingUpPage/SignUpPage';
import {SIGN_UP_PATH} from './routes/routes.js';
import {LOG_IN_PATH} from './routes/routes.js';
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path={SIGN_UP_PATH} element={<SignUpPage/>}/>
        <Route path={LOG_IN_PATH} element={<LogInPage/>}/>
      </Routes>
    </>
  );
}

export default App;
