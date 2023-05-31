import styles from './header.modules.css'
import iconuser from '../assets/iconuser.svg'

function Header() {
    return (
    <div>
         <div className='cont'>
             <h1 className='gb'><span>Grind</span>Bank</h1>
             <h1 className='ac'> Acesse sua <span className='hv'>conta</span></h1>
             <img src={iconuser} alt='Icone de usuario' /> 
         </div>
    </div>
 );
} 

export default Header;