import logo from '../assets/logo.png'
import Navbar from './Navbar'

function Header(){
    return(
        <div>
        <div className ='top-header-rapper'>
            <img src={logo} alt='logo' />
            <ul> 
                <li><a href='#'> <i class="bi bi-geo-alt-fill"></i> Location</a></li>
                <li><a href='#'> <i class="bi bi-person-fill"></i> SignIn/Register</a></li>
            </ul>            
        </div>
        <Navbar />
        </div>
        
    )
}

export default Header