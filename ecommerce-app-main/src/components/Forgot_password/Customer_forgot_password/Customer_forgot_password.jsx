import '../../../utilities/forgot_password_customer.css';

const Customer_forgot_password = (props) => {
    return (
        <div className="main-container-register-page">
            <div className="input-email-forgot-password-page">
                <h4>Enter the Associated email with your account.</h4>
                <input style={{margin: '40px 0 0 0 '}} type="text" className="login-signup-input-text input-text-login-page input-text-login-page-customer" placeholder='Enter Your Email' id="" />
            </div>

            <input className='send-mail-button-register-page' type="button" value='Send mail' />
            <br />
        </div>
    )
}

export default Customer_forgot_password;