import { Link } from "react-router-dom";

const Customer_account_create = (props) => {
    return (
        props.loggedIn?(
            <h1>Logged in</h1>
        ):
        (
        <div className="main-container-login-signup main-container-signup-page">
        <div className="second-container-login-signup second-container-signup-page">
            <h1>Register</h1>
            <div className="input-details-essential input-details-login-page">
                <input style={{margin: '40px 0 0 0 '}} type="text" className="login-signup-input-text input-text-register-page" placeholder='Name' id="" />

                <input style={{margin: '40px 0 0 0 '}} type="text" className="login-signup-input-text input-text-register-page" placeholder='Email' id="" />

                <input style={{margin: '30px 0 13px 0'}} type="text" className="login-signup-input-text input-password-register-page" placeholder='Password' id="" />

                <input style={{margin: '30px 0 13px 0'}} type="text" className="login-signup-input-text input-phone-register-page" placeholder='Phone' id="" />
            </div>
            <button className='login-signup-button signup-button-register-page ' type="button">Sign up</button>
            <Link className='clickable-Link create-customer-account-link-login-page' to='/login-customer-page'>Already Have an Account?</Link>
        </div>
        </div>
        )
    )
}

export default Customer_account_create;