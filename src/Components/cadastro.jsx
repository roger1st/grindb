import './cadastro.modules.css'
import Header from './header'
import warning from '../assets/warning.png'
import ziggs from '../assets/ziggs.png'

function Cadastro() {
    return (
    <>
     <Header />
     <div className='container'>
           <div className='infos'>
            <h1 className='title'> Abrir sua conta é easy!</h1>
            <h3 className='textinfo'> Criar sua conta é fácil e demora menos de 5 minutos! garanta as vantagens do banco para quem é gamer de verdade!</h3>
            <img src={ziggs} alt='img' />

           </div>
               <div className='area'>
                  <div className='wbox'>
                    <img src={warning} alt='img' />
                    <h1> Atenção!</h1>
                    <h3>Os dados de contato serão utilizados para envio de informações importantes sobre o seu cartão.</h3>
                   </div>
                       <div className='inputs'>
                        <h1>Nome Completo</h1>
                       <input type="text" name="nome_do_campo" required  placeholder="Seu nome"/>
                       <h1>Email</h1>
                       <input type="text" name="nome_do_campo" required  placeholder="monotristanakekw@gmail.com"/>
                       <h1>Número de telefone</h1>
                       <input type="text" name="nome_do_campo" required  placeholder="(11) 969707422"/>
                       <h1>Crie uma senha</h1>
                       <input type="password" name="nome_do_campo" required  placeholder="odeiovayne1337"/>
                       <br/>
                       <button type='submit'>Pronto!</button>                       
                        </div>                 
             </div>
             
     </div>
    </>

    );
  }
  
  export default Cadastro;