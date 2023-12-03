import { Link } from 'react-router-dom';
import '../../utilities/Header.css';

const Header = (props) => {
    return (
        props.loggedIn?(
            <div className="container-header">
            <div className="upper-sales-header">
                <p>Get free shipping when you order over <span style={{color: '#ff9900'}}>Rs.2500</span></p>
            </div>
            <div className="logo-and-link-header">
                <Link to='/home'><img style={{userSelect: 'none'}} src="https://raw.githubusercontent.com/NOTAHTI123/resume/master/tsf-logo-header.png" alt="" /></Link>

                <div className="clickable-links-header">
                    <Link to="/mens-page" className='clickable-link-element-header'>Men</Link>
                    <Link to="/womens-page" className='clickable-link-element-header'>Women</Link>
                    <Link to="/kids-page" className='clickable-link-element-header'>Kids</Link>
                    <Link to="/about-page" className='clickable-link-element-header'>About</Link>
                    <Link to="/services-page" className='clickable-link-element-header'>Services</Link>
                </div>

                <div className="user-buttons-header">
                    <span className="material-symbols-outlined user-clickable-button-header">search</span>
                    <span className="material-symbols-outlined user-clickable-button-header">person</span>
                    <span className="material-symbols-outlined user-clickable-button-header">shopping_bag</span>
                </div>
            </div>
        </div>
        ):
        (
            <div className="container-header">
            <div className="upper-sales-header">
                <p>Get free shipping when you order over <span style={{color: '#ff9900'}}>Rs.2500</span></p>
            </div>
            <div className="logo-and-link-header">
                <Link to='/home'><img style={{userSelect: 'none'}} src="https://raw.githubusercontent.com/NOTAHTI123/resume/master/tsf-logo-header.png" alt="" /></Link>

                <div className="clickable-links-header">
                    <Link to="/mens-page" className='clickable-link-element-header'>Men</Link>
                    <Link to="/womens-page" className='clickable-link-element-header'>Women</Link>
                    <Link to="/kids-page" className='clickable-link-element-header'>Kids</Link>
                    <Link to="/about-page" className='clickable-link-element-header'>About</Link>
                    <Link to="/services-page" className='clickable-link-element-header'>Services</Link>
                </div>

                <div className="login-button-header">
                    <Link to='/login-customer-page'><button type="button">Log In</button></Link>
                </div>
            </div>
        </div>
        )
    )
}

export default Header;