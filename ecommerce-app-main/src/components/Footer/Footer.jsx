import '../../utilities/footer.css';

const Footer = () => {
    return(
        <div className="footer-container-home">
                <div className="image-container-footer-home">
                    <img src="https://raw.githubusercontent.com/NOTAHTI123/react-app-ecommerce-5th-sem/main/ecommerce-app-main/src/assets/images/tsf-logo-footer.png" alt="#" />
                </div>
                <div className="contact-us-container-footer-home">
                    <div className="mailing-address-footer-home">
                        <h4>Mailing Address</h4>
                        <p>Exton industries ltd, 23 link road,<br /> Lahore, Pakistan</p>
                    </div>
                    <div className="clickable-links-a-footer-home">
                        <h4>Contact Us</h4>
                        <p><span>Email:- </span>exton@exton-cs.me</p>
                        <p><span>Phone:- </span>+92-3164255-12</p>
                    </div>
                    <div className="links-container-footer-home">
                        <i className='bx bxl-instagram'></i>
                        <i className='bx bxl-facebook'></i>
                        <i className='bx bxl-linkedin'></i>
                        <p>&copy; 2023 Exton-cs.me</p>
                    </div>
                </div>
            </div>
    )
}

export default Footer;