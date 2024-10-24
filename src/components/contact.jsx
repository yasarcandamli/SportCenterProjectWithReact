function Contact() {
    return (
        <>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="contact-info">
                        <h1>CONTACT US</h1>
                        <hr />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ut nesciunt praesentium,
                            exercitationem quas vitae sapiente veniam tempora hic.</p>
                    </div>
                    <div className="contact-options">
                        <div className="contact-details">
                            <div className="contact-detail-info">
                                <div className="number">
                                    <h3>Mobile Number</h3>
                                    <p>+135 773 321 4442</p>
                                </div>
                                <div className="email">
                                    <h3>Email Adress</h3>
                                    <p>demo@demo.com</p>
                                </div>
                            </div>
                            <div className="contact-form">
                                <h2>Make An Appointment</h2>
                                <form action="#">
                                    <div className="form-group">
                                        <input type="text" id="name" name="name" required placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" id="email" name="email" required placeholder="Your Email" />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" id="message" required placeholder="Your Message"></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.7292314211263!2d29.168582376575472!3d40.89975407136605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac56cdec3004d%3A0x901bbe852dc9cc6!2sFit%20Station%20Kartal!5e0!3m2!1str!2str!4v1727886146820!5m2!1str!2str"
                                width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;