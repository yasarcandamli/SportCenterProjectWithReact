function Reviews() {
    return (
        <>
            <section className="reviews" id="reviews">
                <div className="container">
                    <div className="review-info">
                        <h1>REVIEW CLIENT</h1>
                        <hr />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ut nesciunt praesentium,
                            exercitationem quas vitae sapiente veniam tempora hic.</p>
                    </div>
                    <div className="client-reviews">
                        <div className="client-review">
                            <div className="client">
                                <img src="images/client1.jpg" alt="Client1" />
                                <p>Diet Expert
                                    <br />
                                    <span>CFO</span>
                                </p>
                            </div>
                            <div className="review">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae voluptatum placeat molestias
                                officia ullam. Excepturi ducimus dolorum fuga magni repellendus optio natus quidem, delectus
                                odio architecto illum veritatis animi ad!
                            </div>
                        </div>
                        <div className="client-review">
                            <div className="client">
                                <img src="images/client2.jpg" alt="Client2" />
                                <p>Cardio Trainer
                                    <br />
                                    <span>CEO</span>
                                </p>
                            </div>
                            <div className="review">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae voluptatum placeat
                                molestias
                                officia ullam. Excepturi ducimus dolorum fuga magni repellendus optio natus quidem, delectus
                                odio architecto illum veritatis animi ad!
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Reviews;