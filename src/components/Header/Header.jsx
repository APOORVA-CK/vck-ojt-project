import {Link} from 'react-router-dom'
import './Header.css'
const Header = () =>{
    return(
        <div  className='header1'>  
            <header className='header'>
                <nav><h2>
                <Link to="/" className='logo'>Vivekanand College</Link>
                </h2>
                </nav>
            <nav className='navbar desktop-nav'>
            
            <Link to="/home" className='nav'>Home</Link>
           <Link to="/about" className='nav'>About</Link>
            <Link to="/contactus" className='nav'>Contactus</Link>
            <Link to="/courses" className='nav'>Courses</Link>
            <Link to="/admission" className='nav'>Admission</Link>
            <a href="/admission" className="apply-btn">Apply Now</a>                
            </nav>
            </header>
        </div>
    )
}

export default Header;