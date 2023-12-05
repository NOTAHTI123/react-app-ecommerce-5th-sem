import { Link, useNavigate } from 'react-router-dom';
import '../../utilities/login.css';
import { useState } from 'react';

const Login_customer = (props) => {
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handle_submit = async(e) => { // login
        e.preventDefault();
        let response_from_server = await fetch('http://localhost:4000/api/verify-customer', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response_from_server = await response_from_server.text();
        if(response_from_server == '[]') {
            alert('Invalid Credentials');
        }
        else {
            response_from_server = await JSON.parse(response_from_server); // convert to json

            // Setting States
            props.setUsername(response_from_server[0]['name']);
            props.setLoggedin(true);
            props.setEmail(response_from_server[0]['email']);
            props.setPhone(response_from_server[0]['phone']);

            navigate('/');
        }
    }

    const handle_change = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    return (
        props.loggedIn?(
            <h1>Logged In</h1>
        ):
        (
            <div className="main-container-login-signup main-container-login-page">
            <div className="second-container-login-signup second-container-login-page">
                <h1>Login</h1>
                <form className="input-details-login-page" onSubmit={handle_submit}>
                    <input style={{margin: '40px 0 0 0 '}} type="text" className="login-signup-input-text input-text-login-page input-text-login-page-customer" placeholder='Email' id="" name="email" onChange={handle_change} />

                    <input style={{margin: '30px 0 13px 0'}} type="text" className="login-signup-input-text input-text-login-page input-text-login-page-customer" placeholder='Password' id="" name="password" onChange={handle_change} />
                    <Link className='clickable-Link forgot-password-customer' to='/forgot-password-customer-page'>Forgot Password?</Link>
                    <input className='login-signup-button login-button-login-page ' type="submit" value='Sign in' />
                </form>
                <Link className='clickable-Link create-customer-account-link-login-page' to='/create-customer-account'>Create Account</Link>
            </div>
            </div>
        )
    )
}

export default Login_customer;