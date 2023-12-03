import '../../utilities/Home.css';

const Home = () => {
    return (
        <div className="main-container-home">
            <div className="banner-div-home">
                <img src="https://www.elo.shopping/cdn/shop/files/Fashion_Sale_Promotion_Instagram_Post_1800_x_600_px_8afe7888-8ac7-4e51-b8de-562f34ef6216.jpg?v=1701409416&width=2000" alt="https://raw.githubusercontent.com/NOTAHTI123/react-app-ecommerce-5th-sem/main/ecommerce-app-main/src/assets/images/main-woman-banner.jpg" />
            </div>
            <section className="men-women-kid-fashion-home">
                <div className="product-container-men">
                    <div className="heading-home">
                        <h2>Latest in Men&apos;s Fashion</h2>
                    </div>
                    <div className="product-container">
                        {/* 
                            Syntax of product: -

                            <div className="product-default-home">
                                    <div className="product-details">
                                        <img src="img-link" alt="" />
                                        <a href="#"><h3>Name</h3></a>
                                        <div className="rating">
                                            Rating_Numeric Stars_graphical
                                        </div>
                                        <p>Rs {price}</p>
                                    </div>
                                <button className='product-view-now-button-home' type="button">View Now</button>
                            </div>
                        */}
                        <div className="product-default-home">
                            <div className="product-details">
                                <img src="https://raw.githubusercontent.com/NOTAHTI123/react-app-ecommerce-5th-sem/main/ecommerce-app-main/src/assets/images/male/male-1.jpg" alt="" />
                                <a href="#"><h3>Salesianer Men&apos;s Short Sleeves Minor Fault Polo Shirt</h3></a>
                                <p>Rs 599.00</p>
                            </div>
                            <button className='product-view-now-button-home' type="button">View Now</button>
                        </div>
    
                        <div className="product-default-home">
                            <div className="product-details">
                                <img src="https://raw.githubusercontent.com/NOTAHTI123/react-app-ecommerce-5th-sem/main/ecommerce-app-main/src/assets/images/male/male-2.jpg" alt="" />
                                <a href="#"><h3>Aqua Men&apos;s Minor Fault Thermal Tee Shirt</h3></a>
                                <p>Rs 599.00</p>
                            </div>
                            <button className='product-view-now-button-home' type="button">View Now</button>
                        </div>
                        <div className="product-default-home">
                            <div className="product-details">
                                <img src="https://raw.githubusercontent.com/NOTAHTI123/react-app-ecommerce-5th-sem/main/ecommerce-app-main/src/assets/images/male/male-3.jpg" alt="" />
                                <a href="#"><h3>Eternity Men&apos;s Formal Button Down Dress Shirt</h3></a>
                                <p>Rs 599.00</p>
                            </div>
                            <button className='product-view-now-button-home' type="button">View Now</button>
                        </div>
                        <div className="product-default-home">
                            <div className="product-details">
                                <img src="https://raw.githubusercontent.com/NOTAHTI123/react-app-ecommerce-5th-sem/main/ecommerce-app-main/src/assets/images/male/male-4.jpg" alt="" />
                                <a href="#"><h3>Polo Republica Men&apos;s Contrast Raglan Shoulder Minor Fault Terry Zipper Hoodie</h3></a>
                                <p>Rs 599.00</p>
                            </div>
                            <button className='product-view-now-button-home' type="button">View Now</button>
                        </div>

                    </div>

                    <button className='view-all-button-home' type="button">View All</button>

                </div>

                <div className="product-container-women">
                    <div className="heading-home">
                        <h2>Latest in Women&apos;s Fashion</h2>
                    </div>
                    <div className="product-container">
                        <div className="product-default-home">
                            <div className="product-details">
                                <img src="https://raw.githubusercontent.com/NOTAHTI123/react-app-ecommerce-5th-sem/main/ecommerce-app-main/src/assets/images/female/Female1.jpg" alt="" />
                                <a href="#"><h3>High Spirits Women&apos;s Long Sleeve Denim Jumpsuit</h3></a>
                                <p>Rs 1500</p>
                            </div>
                            <button className='product-view-now-button-home' type="button">View Now</button>
                        </div>
    
                        <div className="product-default-home">
                            <div className="product-details">
                                <img src="https://raw.githubusercontent.com/NOTAHTI123/react-app-ecommerce-5th-sem/main/ecommerce-app-main/src/assets/images/female/Female2.jpg" alt="" />
                                <a href="#"><h3>East West Women&apos;s Model Girls Printed Short Sleeve Tee Shirt</h3></a>
                                <p>Rs 769.00</p>
                            </div>
                            <button className='product-view-now-button-home' type="button">View Now</button>
                        </div>
                        <div className="product-default-home">
                            <div className="product-details">
                                <img src="https://raw.githubusercontent.com/NOTAHTI123/react-app-ecommerce-5th-sem/main/ecommerce-app-main/src/assets/images/female/Female3.jpg" alt="" />
                                <a href="#"><h3>East West Women&apos;s Stitched Suit</h3></a>
                                <p>Rs 2100.00</p>
                            </div>
                            <button className='product-view-now-button-home' type="button">View Now</button>
                        </div>
                        <div className="product-default-home">
                            <div className="product-details">
                                <img src="https://raw.githubusercontent.com/NOTAHTI123/react-app-ecommerce-5th-sem/main/ecommerce-app-main/src/assets/images/female/Female4.jpg" alt="" />
                                <a href="#"><h3>East West Women&apos;s 2 Pc Stitched</h3></a>
                                <p>Rs 2100.00</p>
                            </div>
                            <button className='product-view-now-button-home' type="button">View Now</button>
                        </div>

                    </div>

                    <button className='view-all-button-home' type="button">View All</button>

                </div>
            </section>
        </div>
    )
}

export default Home;