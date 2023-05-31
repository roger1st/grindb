import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home';
import Contrato from './contrato';
import Conta from './conta';
import Cadastro from './cadastro'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route path="/Contrato" component={Contrato} />
        <Route path="/Conta" component={Conta} />
        <Route path="/Cadastro" component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
}