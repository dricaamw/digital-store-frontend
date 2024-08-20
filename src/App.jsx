import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderLogin from './components/HeaderLogin';
import Login from './components/Login';
import RecuperarSenha from './EsqueciASenha';
import './index.css';
import 'primeicons/primeicons.css';
import { Paths } from './Routes';

const App = () => {
  return (
    <>
      <Paths />
    </>
  );
}

export default App;