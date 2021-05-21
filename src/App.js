import LandingPage from './screens/LandingPage';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import FriendPage from './screens/FriendPage';
import GlobalStyle from './styles/GlobalStyle';
import MainPage from './screens/MainPage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Route path='/register' component={RegisterPage} />
      <Route path='/' component={LandingPage} exact />
      <Route path='/login' component={LoginPage} />
      <Route path='/main' component={MainPage} />
    </>
  );
}

export default App;
