import LandingPage from './screens/LandingPage';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import GlobalStyle from './styles/GlobalStyle';
import MainPage from './screens/MainPage';
import { Route } from 'react-router-dom';

import TeamCalendarPage from './screens/TeamCalendarPage';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Route path='/' component={LandingPage} exact />
      <Route path='/login' component={LoginPage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/main' component={MainPage} /> */}
      <TeamCalendarPage />
    </>
  );
}

export default App;
