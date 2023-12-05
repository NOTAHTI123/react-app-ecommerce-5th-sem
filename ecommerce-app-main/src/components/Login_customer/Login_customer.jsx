import { Link } from 'react-router-dom';
import '../../utilities/login.css';

const Login_customer = (props) => {
    return (
        props.loggedIn?(
            <h1>Logged In</h1>
        ):
        (
            <div className="main-container-login-signup main-container-login-page">
            <div className="second-container-login-signup second-container-login-page">
                <h1>Login</h1>
                <div className="input-details-login-page">
                    <input style={{margin: '40px 0 0 0 '}} type="text" className="login-signup-input-text input-text-login-page input-text-login-page-customer" placeholder='Email' id="" />

                    <input style={{margin: '30px 0 13px 0'}} type="text" className="login-signup-input-text input-text-login-page input-text-login-page-customer" placeholder='Password' id="" />
                    <Link className='clickable-Link forgot-password-customer' to='/forgot-password-customer-page'>Forgot Password?</Link>
                </div>
                <button className='login-signup-button login-button-login-page ' type="button">Sign in</button>
                <Link className='clickable-Link create-customer-account-link-login-page' to='/create-customer-account'>Create Account</Link>
            </div>
            </div>
        )
    )
}

export default Login_customer;