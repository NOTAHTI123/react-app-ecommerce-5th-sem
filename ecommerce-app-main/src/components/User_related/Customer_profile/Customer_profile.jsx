import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../../../utilities/Customer_profile.css';

const Customer_profile = (props) => {
    return(
        props.loggedIn?(
            <div className="container-div-customer_profile">
                <div className="nav-bar-left-customer">
                    <Link><button className="button-nav-bar-left profile-button-nav-bar-left-customer" type="button">Profile</button></Link>
                    <Link><button className="button-nav-bar-left security-button-nav-bar-left-customer" type="button">Security</button></Link>
                    <Link><button className="button-nav-bar-left transaction-history-button-nav-bar-left-customer" type="button">Transaction History</button></Link>
                </div>
                <div className="customer-profile-main-div">
                    <p><span>Name: - </span>{props.username}</p> <br />
                    <p><span>Phone: - </span>{props.phone}</p> <br />
                    <p><span>Email: - </span>{props.email}</p> <br />
                </div>
            </div>
        ):
        (
            <Navigate to='/' />
        )
    );
};

export default Customer_profile;