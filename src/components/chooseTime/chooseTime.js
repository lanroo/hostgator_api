import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { timeMenus } from "../../helpers/chooseTime.helpers";
import { setSelectedTime } from "../../actions/chooseTime.actions"

import RadioOff from "../../assets/disabled.svg";

import RadioOn from "../../assets/enabled.svg";


import "./chooseTime.css";
export default function ChooseTime() {
    const { selectedTime } = useSelector(redux => redux.state);
    const dispatch = useDispatch();

    const handleClickTime = (time) => {
        setSelectedTime(dispatch, time)
    } 
    return (
        <div className="container-chooseTime">
            <div className="chooseTimes">
                {timeMenus.map(time => (
                    <div onClick={() => handleClickTime(time)} key={time} className={time === selectedTime ? "chooseTime selected" : "chooseTime"}>
                        <img alt="radio" className="radio-img" src={time === selectedTime ? RadioOn : RadioOff} />
 {time}
 </div>
                ))}
            </div>
        </div>
    );
}

