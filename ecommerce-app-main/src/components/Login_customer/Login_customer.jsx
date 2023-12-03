import { Link } from 'react-router-dom';
import '../../utilities/login.css';

const Login_customer = (props) => {
    return (
        <div className="login-main-container-login-page">
            <div className="login-second-container-login-page">
                <h1>Login</h1>
                <div className="input-details-login-page">
                    <input style={{margin: '40px 0 0 0 '}} type="text" className="input-text-login-page input-text-login-page-customer" placeholder='Email' id="" />

                    <input style={{margin: '30px 0 13px 0'}} type="text" className="input-text-login-page input-text-login-page-customer" placeholder='Password' id="" />
                    <Link className='forgot-password forgot-password-customer' to='/forgot-password-customer-page'>Forgot Password?</Link>
                </div>
                <button className='login-button-login-page ' type="button">Sign in</button>
            </div>
        </div>
    )
}

export default Login_customer;