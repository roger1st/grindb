import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Components/home";
import Contrato from './Components/contrato';
import Cadastro from './Components/cadastro';
import Conta from './Components/conta';

function App() {
  return (
    <Router>
  <Home/>
        <Route exact path="/Home" component={Home} />
        <Route path="/Contrato" component={Contrato} />
        <Route path="/Conta" component={Conta} />
        <Route path="/Cadastro" component={Cadastro} />
  <Contrato />
  <Cadastro />
  <Conta />
  </Router>
  );
}

export default App;
