import { useState } from "react";

useState
function Classes() {
    const [activeClass, setActiveClass] = useState("yoga");

    const handleButtonClick = (className) => {
        setActiveClass(className);
    };
    return (
        <>
            <section className="classes" id="classes">
                <div className="container">
                    <div className="classes-info">
                        <h1>OUR CLASSES</h1>
                        <hr />
                        <p>Lorem Ipsum is not simply random text. I has roots in a piece of classical at Hampden-Sydney College
                        </p>
                    </div>
                    <div className="classes-btns">
                        <div className="btn-group">
                            <button className={`classes-btn yoga-btn ${activeClass === "yoga" ? "active-btn" : ""}`}
                                id="yoga"
                                onClick={() => handleButtonClick("yoga")}>Yoga</button>
                            <button className={`classes-btn group-btn ${activeClass === "group" ? "active-btn" : ""}`}
                                id="group"
                                onClick={() => handleButtonClick("group")}>Group</button>
                        </div>
                        <div className="btn-group">
                            <button className={`classes-btn solo-btn ${activeClass === "solo" ? "active-btn" : ""}`}
                                id="solo"
                                onClick={() => handleButtonClick("solo")}>Solo</button>
                            <button className={`classes-btn stretching-btn ${activeClass === "stretching" ? "active-btn" : ""}`}
                                id="stretching"
                                onClick={() => handleButtonClick("stretching")}>Stretching</button>
                        </div>
                    </div>
                    <div className="classes-section">
                        <div className={`yoga ${activeClass === "yoga" ? "classes-chosen" : "hidden"}`}>
                            <div className="class-change">
                                <div className="class-info">
                                    <h2>Why you should do Yoga?</h2>
                                    <p className="class-p-info">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate maiores aliquam odit
                                        enim
                                        quae ab architecto earum nostrum cumque quaerat at illum placeat tenetur exercitationem
                                        sapiente
                                        laboriosam, dicta dolores ipsum.
                                    </p>
                                    <h2>When are the yoga classes?</h2>
                                    <p>Saturday - Sunday: 08.00 am - 10:00 am</p>
                                    <p>Monday - Tuesday: 10.00 am - 12:00 pm</p>
                                    <p>Wednesday - Friday: 08.00 am - 10:00 am</p>
                                </div>
                                <img className="class-img" src="images/yoga.jpg" alt="Yoga" />
                            </div>
                        </div>
                        <div className={`group ${activeClass === "group" ? "classes-chosen" : "hidden"}`}>
                            <div className="class-change">
                                <div className="class-info">
                                    <h2>Why you should join Group?</h2>
                                    <p className="class-p-info">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad blanditiis veritatis omnis
                                        fuga
                                        incidunt quia voluptate minima vero animi eveniet quod quasi fugit perferendis, mollitia
                                        cumque consectetur laborum architecto saepe.
                                    </p>
                                    <h2>When are the group classes?</h2>
                                    <p>Saturday - Sunday: 08.00 am - 10:00 am</p>
                                    <p>Monday - Tuesday: 10.00 am - 12:00 pm</p>
                                    <p>Wednesday - Friday: 08.00 am - 10:00 am</p>
                                </div>
                                <img className="class-img" src="images/group.webp" alt="Group" />
                            </div>
                        </div>
                        <div className={`solo ${activeClass === "solo" ? "classes-chosen" : "hidden"}`}>
                            <div className="class-change">
                                <div className="class-info">
                                    <h2>Why you should take Solo?</h2>
                                    <p className="class-p-info">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate nobis nam,
                                        quo,
                                        quisquam sapiente quos officiis veritatis deserunt sit, ex error praesentium. Sit
                                        ducimus
                                        accusamus dolor quaerat expedita dolorem?
                                    </p>
                                    <h2>When are the solo classes?</h2>
                                    <p>Saturday - Sunday: 08.00 am - 10:00 am</p>
                                    <p>Monday - Tuesday: 10.00 am - 12:00 pm</p>
                                    <p>Wednesday - Friday: 08.00 am - 10:00 am</p>
                                </div>
                                <img className="class-img" src="images/solo.jpg" alt="Solo" />
                            </div>
                        </div>
                        <div className={`stretching ${activeClass === "stretching" ? "classes-chosen" : "hidden"}`}>
                            <div className="class-change">
                                <div className="class-info">
                                    <h2>Why you should do Stretching?</h2>
                                    <p className="class-p-info">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptas, tempore
                                        nostrum,
                                        dignissimos esse cum iusto dolorem, veritatis sint deleniti est magnam vel debitis
                                        itaque!
                                        Deserunt temporibus earum numquam dolore.
                                    </p>
                                    <h2>When are the stretching?</h2>
                                    <p>Saturday - Sunday: 08.00 am - 10:00 am</p>
                                    <p>Monday - Tuesday: 10.00 am - 12:00 pm</p>
                                    <p>Wednesday - Friday: 08.00 am - 10:00 am</p>
                                </div>
                                <img className="class-img" src="images/stret.webp" alt="Stretching" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Classes;