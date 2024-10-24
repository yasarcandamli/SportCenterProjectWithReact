import trainer1 from "../../images/trainer1.jpg";
import trainer2 from "../../images/trainer2.jpg";
import trainer3 from "../../images/trainer3.jpg";
function Trainers() {
    return (
        <>
            <section className="trainers" id="trainers">
                <div className="container">
                    <div className="trainers-info">
                        <h1>OUR BEST TRAINERS</h1>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deleniti quod consequuntur
                            reiciendis?
                            Porro delectus, magni laboriosam quaerat dolores nesciunt voluptates.</p>
                    </div>
                    <div className="trainers-options">
                        <div className="trainer">
                            <img src={trainer1} alt="Trainer-1" />
                            <div className="trainer-card">
                                <div className="trainer-card-info">
                                    <h2>Susan Doe</h2>
                                    <p>Plates Trainer</p>
                                </div>
                            </div>
                        </div>
                        <div className="trainer">
                            <img src={trainer2} alt="Trainer-2" />
                            <div className="trainer-card">
                                <div className="trainer-card-info">
                                    <h2>John Doe</h2>
                                    <p>Fitness Trainer</p>
                                </div>
                            </div>
                        </div>
                        <div className="trainer">
                            <img src={trainer3} alt="Trainer-3" />
                            <div className="trainer-card">
                                <div className="trainer-card-info">
                                    <h2>Jane Doe</h2>
                                    <p>Cardio Trainer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Trainers;