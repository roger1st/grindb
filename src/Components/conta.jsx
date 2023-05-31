import './conta.modules.css'
import sonic from '../assets/sonic.png'
import moozie from '../assets/moozie.png'
import mario from '../assets/mario.png'
import usericon from '../assets/usericon.png'
import helpicon from '../assets/helpicon.png'
import eyecheck from '../assets/eyecheck.png'
import pix from '../assets/pix.png'
import pagar from '../assets/pagar.png'
import recarga from '../assets/recarga.png'
import Footer from './footer'

function Conta() {
    return (
    <>
    <div className='userarea'>
        <div className='imgarea'>
        <img src={usericon} alt='usericon' />
        <img  className='eye' src={eyecheck} alt='eyecheck'/>
        <img src={helpicon} alt='helpicon' />
        </div>
        <h1>Eai, usuario!</h1>
    </div>
    <div className='accarea'>
        <h1>Conta</h1>
        <h3><span>R$:</span>2,500</h3>
    </div>
    <div className='btnsarea'>
     <img src={pix} alt='pix' />
     <img src={recarga} alt='recarga' />
     <img src={pagar} alt='pagar' />
    </div>
    <div className='credit'>
        <h1>Cartão de crédito</h1>
        <h2>Fatura <span>fechada</span></h2>
        <h3><span>R$:</span>1.500</h3>
        <button>Pagar fatura</button>
    </div>
    <div className='gamearea'>
     <img src={mario} alt='mario' />
     <img src={moozie} alt='moozie' />
     <img src={sonic} alt='sonic' />
    </div>

    <Footer />
    </>
    );
  }
  
  export default Conta;
  