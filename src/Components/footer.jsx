import './footer.modules.css';
import divisorbranco from '../assets/divisorbranco.png'

function Footer() {
    return (
    <>
    
    <div className='footer'>
    <div className='divisorbranco' style={{ backgroundImage: `url(${divisorbranco})` }}></div>
     <h3 className='texting'>1st Company | Copyright Grind Bank 2023</h3>
     <h3 className='texting'> Termos de uso</h3>
     <h3 className='texting'>Politicas de privacidade</h3>
     <h3 className='texting'>Contato</h3>
     <h3 className='texting'>Ajuda</h3>
    </div>
    <div className='hr'></div>
    
    
    
    </>

    );
  }
  
  export default Footer;