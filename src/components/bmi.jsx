import { useEffect, useState } from "react";
import bmiImage from "../../images/bmi-index.jpg";
function BMI() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmiResult, setBmiResult] = useState('Your BMI');
    const [pointerRight, setPointerRight] = useState('8%');

    const calculateBMI = () => {
        const heightValue = parseFloat(height);
        const weightValue = parseFloat(weight);

        if (!heightValue || !weightValue || heightValue <= 0 || weightValue <= 0) {
            setBmiResult('Lütfen geçerli bir yükseklik ve ağırlık girin.');
            setPointerRight('8%');
            return;
        }

        const bmi = (weightValue / ((heightValue / 100) * (heightValue / 100))).toFixed(1);
        setBmiResult(`Your BMI: ${bmi}`);
        updatePointer(bmi);
    };

    const updatePointer = (bmi) => {
        let pointerPos;

        if (bmi > 35) {
            pointerPos = '16%';
        } else if (bmi >= 30 && bmi <= 34.9) {
            pointerPos = '32%';
        } else if (bmi >= 25 && bmi <= 29.9) {
            pointerPos = '48%';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            pointerPos = '65%';
        } else {
            pointerPos = '81%';
        }

        setPointerRight(pointerPos);
    };

    useEffect(() => {
        if (height && weight) {
            calculateBMI();
        }
    }, [height, weight]);

    return (
        <>
            <section className="bmi" id="bmi">
                <div className="container">
                    <div className="bmi-info">
                        <h1>BMI Calculator</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sunt sint beatae maxime voluptatibus
                            consequuntur, quas quaerat quasi accusantium natus ipsa neque eius voluptatum rem. Numquam
                            recusandae debitis unde corrupti!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sunt sint beatae maxime voluptatibus
                            consequuntur, quas quaerat quasi accusantium natus ipsa neque eius voluptatum rem. Numquam
                            recusandae debitis unde corrupti!</p>
                        <div className="bmi-calculation">
                            <div className="height">
                                <input type="text"
                                    placeholder="Your Height"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)} />
                                <label> cm </label>
                            </div>
                            <div className="weight">
                                <input type="text"
                                    placeholder="Your Weight"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)} />
                                <label> kg </label>
                            </div>
                        </div>
                    </div>
                    <div className="bmi-result">
                        <h2>{bmiResult}</h2>
                        <div className="bmi-img">
                            <img src={bmiImage} alt="BMI-Index" />
                            <div className="bmi-pointer" style={{ right: pointerRight }}></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BMI;