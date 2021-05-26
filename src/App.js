import LandingPage from './screens/LandingPage';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import GlobalStyle from './styles/GlobalStyle';
import MenuBar from './components/commons/MenuBar';
import SetPage from './screens/SetPage';


function App() {
  return (
    <>
      <GlobalStyle />
      {/* <LandingPage /> */}

      <MenuBar />
      {/* <LoginPage /> */}
      <SetPage />
      {/* <RegisterPage /> */}
    </>
  );
}

export default App;
