import LandingPage from './screens/LandingPage';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import SetPage from './screens/SetPage';
import GlobalStyle from './styles/GlobalStyle';
import MainPage from './screens/MainPage';
import PasswordCheckPage from './screens/PasswordCheckPage';
import { Route } from 'react-router-dom';
import TeamCalendarPage from './screens/TeamCalendarPage';
import FriendPage from './screens/FriendPage';
import TeamPage from './screens/TeamPage';
import FriendCalendarPage from './screens/FriendCalendarPage';
import PrivateCalendarPage from './screens/PrivateCalendarPage';

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
      <Route path='/friend' component={FriendPage} />
      <Route path='/team' component={TeamPage} />
      <Route path='/calendar' component={PrivateCalendarPage} />
      <Route path='/teamCalendar' component={TeamCalendarPage} />
      <Route path='/frinedCalendar' component={FriendCalendarPage} />
    </>
  );
}

export default App;
