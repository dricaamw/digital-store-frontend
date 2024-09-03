import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderLogin from './components/HeaderLogin';
import Login from './components/Login';
import RecuperarSenha from './EsqueciASenha';
import './index.css';
import 'primeicons/primeicons.css';
import { Paths } from './routes';
import Produto from './components/Produto';

const App = () => {
  return (
    <>
      <Paths />
      <Produto />
    </>
  );
}

export default App;