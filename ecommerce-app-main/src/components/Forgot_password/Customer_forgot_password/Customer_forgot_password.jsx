import '../../../utilities/forgot_password_customer.css';

const Customer_forgot_password = (props) => {
    return (
        <div className="second-container-login-signup">
            <div className="input-email-forgot-password-page">
                <h4>Enter the Associated email with your account.</h4>
                <input style={{margin: '40px 0 0 0 '}} type="text" className="login-signup-input-text input-text-login-page input-text-login-page-customer" placeholder='Enter Your Email' id="" />
            </div>

            <button className='login-signup-button send-mail-button-login-page' type="button">Send Mail</button>
            <br />
        </div>
    )
}

export default Customer_forgot_password;