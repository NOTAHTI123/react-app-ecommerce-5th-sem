import { Link } from 'react-router-dom';
import '../../utilities/Header.css';

const Header = () => {
    return (
        <div className="container-header">
            <div className="upper-sales-header">
                <p>Get free shipping when you order over <span style={{color: '#ff9900'}}>Rs.2500</span></p>
            </div>
            <div className="logo-and-link-header">
                <img src="https://raw.githubusercontent.com/NOTAHTI123/resume/master/tsf-logo-header.png" alt="" />

                <div className="clickable-links-header">
                    <Link to="" className='clickable-link-element-header'>Men</Link>
                    <Link to="" className='clickable-link-element-header'>Women</Link>
                    <Link to="" className='clickable-link-element-header'>Kids</Link>
                    <Link to="" className='clickable-link-element-header'>About</Link>
                    <Link to="" className='clickable-link-element-header'>Services</Link>
                </div>

                <div className="user-buttons-header">
                    <span className="material-symbols-outlined user-clickable-button-header">search</span>
                    <span className="material-symbols-outlined user-clickable-button-header">person</span>
                    <span className="material-symbols-outlined user-clickable-button-header">shopping_bag</span>
                </div>
            </div>
        </div>
    )
}

export default Header;