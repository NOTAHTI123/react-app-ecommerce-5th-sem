import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Customer_account_create = (props) => {

    const [register_form, setRegister_form] = useState({});
    const navigate = useNavigate();

    const handle_register = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/api/create-customer-account', {
            method: 'POST',
            body: await JSON.stringify(register_form),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let response_string = await response.text();

        if(response_string == "\"customer_account_created\"") {
            alert("Account created successfully.");
            navigate('/login-customer-page');
        }
        else if(response_string == "\"customer_account_already_exists_error\"") {
            alert("Account associated with the specified email already exists.")
        }
    };

    const handle_change = (e) => {
        setRegister_form({
            ...register_form,
            [e.target.name]: e.target.value
        });
    };

    return (

        props.loggedIn?(
            <h1>Logged in</h1>
        ):
        (
        <div className="main-container-login-signup main-container-signup-page">
        <div className="second-container-login-signup second-container-signup-page">
            <h1>Register</h1>
            <form className="input-details-essential input-details-login-page" onSubmit={handle_register}>
                <input style={{margin: '40px 0 0 0 '}} type="text" className="login-signup-input-text input-text-register-page" placeholder='Name' name='username' id="" onChange={handle_change} />

                <input style={{margin: '40px 0 0 0 '}} type="text" className="login-signup-input-text input-text-register-page" placeholder='Email' id="" name="email" onChange={handle_change} />

                <input style={{margin: '30px 0 13px 0'}} type="text" className="login-signup-input-text input-password-register-page" placeholder='Password' id="" name="password" onChange={handle_change} />

                <input style={{margin: '30px 0 13px 0'}} type="text" className="login-signup-input-text input-phone-register-page" placeholder='Phone' id="" name="phone" onChange={handle_change} />

                <input className='login-signup-button signup-button-register-page ' type="submit" value='Sign up' />
            </form>
            <Link className='clickable-Link create-customer-account-link-login-page' to='/login-customer-page'>Already Have an Account?</Link>
        </div>
        </div>
        )
    )
}

export default Customer_account_create;