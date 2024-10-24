import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import purchase1 from "../../images/purchase1.jpg";
import purchase2 from "../../images/purchase2.jpg";
import purchase3 from "../../images/purchase3.jpg";
import purchase4 from "../../images/purchase4.jpg";
function Purchase() {
    return (
        <>
            <section className="purchases" id="purchases">
                <div className="container">
                    <div className="purchase-info">
                        <h1>PURCHASE FROM US</h1>
                        <hr />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ut nesciunt praesentium,
                            exercitationem quas vitae sapiente veniam tempora hic.</p>
                    </div>
                    <div className="purchase-options">
                        <div className="purchase">
                            <img src={purchase1} alt="Purchase-1" />
                            <div className="purchase-option-info">
                                <h1>Kettlebell / 5kg</h1>
                                <p className="price"><span className="deleted">89,99$</span> / 59,99$</p>
                                <div className="add-to-cart">
                                    <span className="material-symbols-outlined">
                                        <ShoppingCartIcon />
                                    </span>
                                    <a href="#">Add To Cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="purchase">
                            <img src={purchase2} alt="Purchase-2" />
                            <div className="purchase-option-info">
                                <h1>Treadmill</h1>
                                <p className="price"><span className="deleted">899,99$</span> / 599,99$</p>
                                <div className="add-to-cart">
                                    <span className="material-symbols-outlined">
                                        <ShoppingCartIcon />
                                    </span>
                                    <a href="#">Add To Cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="purchase">
                            <img src={purchase3} alt="Purchase-3" />
                            <div className="purchase-option-info">
                                <h1>Adjustable Dumbell</h1>
                                <p className="price"><span className="deleted">89,99$</span> / 59,99$</p>
                                <div className="add-to-cart">
                                    <span className="material-symbols-outlined">
                                        <ShoppingCartIcon />
                                    </span>
                                    <a href="#">Add To Cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="purchase">
                            <img src={purchase4} alt="Purchase-4" />
                            <div className="purchase-option-info">
                                <h1>Kettlebell / 3kg</h1>
                                <p className="price"><span className="deleted">89,99$</span> / 59,99$</p>
                                <div className="add-to-cart">
                                    <span className="material-symbols-outlined">
                                        <ShoppingCartIcon />
                                    </span>
                                    <a href="#">Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Purchase;