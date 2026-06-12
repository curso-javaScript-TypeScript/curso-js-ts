import { Router } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import history from './services/history';
import GlobalStyles, { Container } from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className={toast - Container} />
    </Router>
  );
}

export default App;
