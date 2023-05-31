import './home.modules.css';
import {Link} from 'react-router-dom';
import bgsection from '../assets/bgsection.svg'
import divisor from '../assets/divisor.svg'
import fallen from '../assets/fallen.png'
import homem from '../assets/homem.png'
import suporteimg from '../assets/suporteimg.svg'
import cartao from '../assets/cartao.png'
import Header from "./header";
import Footer from './footer';

function Home() {
    return (
    <div>
      <Header />
      <div className='firstsection' style={{ backgroundImage: `url(${bgsection})` }}></div>
          <div className='divisor' style={{ backgroundImage: `url(${divisor})` }}></div>

          <div className='cashb'>
            <div className='textcash'>
            <h1>Cashback em compras de jogos</h1>
            <h2> cashback em compras de jogos ou itens virtuais, permitindo que os clientes economizem dinheiro enquanto continuam jogando.</h2>
            </div>
            <img className='imgcash' src={homem} alt='imagem' />
          </div>
          
          <div className='esports'>
          <img className='imgesports' src={fallen} alt='imagem' />
            <div className='textesports'>
            <h1>Soluções de pagamento para pro’s</h1>
            <h2>O Grind Bank oferece soluções de pagamento personalizadas para jogadores profissionais, facilitando o recebimento de prêmios em dinheiro de competições de jogos.</h2>
            </div>
        </div>

        <div className='suporte'>
            <div className='textsup'>
            <h1>Suporte dedicado</h1>
            <h2>suporte dedicado para jogadores, com atendimento especializado e soluções para problemas comuns relacionados a jogos e finanças.</h2>
            </div>
            <img className='imgsup' src={suporteimg} alt='imagem' />
        </div>

        <div className='card'>
        <img className='imgcard' src={cartao} alt='imagem' />
        <button><Link to='/Contrato/'>
          Peça seu cartão!</Link></button>

        </div>
        <Footer />


  </div>

    );
} 

export default Home;