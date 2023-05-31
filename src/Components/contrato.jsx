import Header from "./header";
import './contrato.modules.css';
import  cartoes from '../assets/cartoes.svg';
import divisor from '../assets/divisor.svg';
import calendar from '../assets/calendar.svg'
import cifrao from '../assets/cifrao.svg'
import score from '../assets/score.svg'
import Footer from './footer';
import { Link } from "react-router-dom";

function Contrato() {
    return (
<div>
<Header />
    <div className="container">
          <div className="firstsec">
            <img className="cartoes" src={cartoes} alt="imagem cartoes" />
              <div className="box">
                <h1>Digite seu CPF</h1>
                <input type="text" name="nome_do_campo" maxLength={11} required  placeholder="OOO.OOO.OOO-OO"/>
                <button><Link to='/Cadastro/'>Pedir cartão</Link> </button>
              </div>
          </div>
          <div className='divisor' style={{ backgroundImage: `url(${divisor})` }}></div>
          <div className="requisitos">
            <div className="cifrao">
              <img src={cifrao} alt="img" />
              <div className="textarea">
              <h1>Renda Minima</h1>
              <h2>R$:800,00</h2>
              </div>
            </div>
            <div className="calendar">
            <img src={calendar} alt="img" />
            <div className="textarea">
              <h1>Anuidade</h1>
              <h2>Sem anuidade</h2>
              </div>
            </div>
            <div className="score">
              <img src={score} alt="img" />
              <div className="textarea">
              <h1>Pontuação</h1>
              <h2>6% de Cashback</h2>
              </div>
            </div>
          </div>
          <div className="hrr"></div>
          <div className="areacontrato">
            <div className="clausula">
              <h1>Conheça os benefícios do cartão Grind Bank Platinum</h1>
              <h3>Um banco com conta digital e cartão de crédito free-to-play, sem custo, sem taxas e com vantagens que fazem sentido pra quem é gamer. Crie sua conta agora pelo app e vem mostrar que o game pode ser gigante. Quem é gamer sabe a importância de um bom duo e, no Grind Bank, você garante conta que rende a 100% do CDI e cashback de 5% nas compras com cartão de crédito nas lojas participantes. <br /> Crie sua conta agora pelo app e vem mostrar que o game pode ser gigante. Quem é gamer sabe a importância de um bom duo e, no Grind Bank, você garante conta que rende a 100% do CDI e cashback de 5% nas compras com cartão de crédito nas lojas participantes.</h3>
              <h1>Grinder’s Club:</h1>
              <h3> Benefícios e descontos exclusivos! Não tá fácil farmar grana na vida real não. Pra ter aquele fone brabo ou o jogo que a gente não via a hora de lançar, precisa rolar aquele desconto. Aí chegou o Player’s Club, com promoções exclusivas em games, periféricos e tudo que a gente gosta. Agora tá até easy demais.</h3>
              <h1>Free to play: Conta e cartão de crédito grátis</h1>
              <h3>Gamer adore um free play. E, se a call é criar um banco do nosso jeito, tem que rolar conta digital e cartão de crédito grátis pra todo o squad usar. Ah, e de graça pra sempre, tá? Sem surpresas. A 1ST ouviu a comunidade e criou o Grind Bank, o banco que joga junto.</h3>
              <h3>*Sujeito à análise de crédito.** Confira as regras e os termos do cashback de 5% nas lojas participantes</h3>
              <h1> Consulte  aqui o contrato</h1>
            </div>
          </div>

          <Footer />
    </div>
    


</div>
    
 );
} 

export default Contrato;