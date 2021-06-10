import LandingPage from './screens/LandingPage';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import SetPage from './screens/SetPage';
import GlobalStyle from './styles/GlobalStyle';
import MainPage from './screens/MainPage';
import PasswordCheckPage from './screens/PasswordCheckPage';
import { Route } from 'react-router-dom';
import TeamCalendarPage from './screens/TeamCalendarPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Route path='/' component={LandingPage} exact />
      <Route path='/login' component={LoginPage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/main' component={MainPage} />
      <Route path='/passwordCheck' component={PasswordCheckPage} />
      <Route path='/setting' component={SetPage} />
      <Route path='/teamCalendar' component={TeamCalendarPage} />
    </>
  );
}

export default App;
