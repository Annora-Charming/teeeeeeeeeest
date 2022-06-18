import {useNavigate} from "react-router-dom";
import styles from './exSec1Lesson1.module.css';

function ExSec1Lesson1() {
    const navigate = useNavigate();
    return (
        <>
            <div className="wrapper">
                <div className="outerContent">
                    <div className="innerContent">
                        <div className="box">
                            <div className="lessonCard">
                                <div className="lessonTitle">
                                    <div className="backArrow" onClick={() => navigate("/exercises/exSec1")}>
                                        <img width="10%" src="/backArrow.jpg"/>
                                    </div>
                                    <h1>Упражнения №1</h1>
                                </div>
                                <button onClick={() => navigate("/theory/thSec1/thSec1Lesson1")}>Теория к занятию</button>
                                <button onClick={() => navigate("/exercises/exSec1/exSec1Lesson2")}>Следующее занятие</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExSec1Lesson1;