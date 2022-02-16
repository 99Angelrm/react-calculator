import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { whatToDo } from "../actions/ui";

const Keyboard = () => {
    const dispatch = useDispatch();
    const { number } = useSelector((state) => state.ui);
    const handleKey = (e) => {
        const key = e.currentTarget.textContent;
        dispatch(whatToDo(number, key));
    };
    return (
        <div className="keyboard__layout">
            <div onClick={handleKey} className="keyboard__button-key pointer">
                +
            </div>
            <div onClick={handleKey} className="keyboard__button-key pointer">
                -
            </div>
            <div onClick={handleKey} className="keyboard__button-key pointer">
                *
            </div>
            <div onClick={handleKey} className="keyboard__button-key pointer">
                ÷
            </div>
            <div onClick={handleKey} className="keyboard__button-key pointer">
                7
            </div>
            <div onClick={handleKey} className="keyboard__button-key pointer">
                8
            </div>
            <div onClick={handleKey} className="keyboard__button-key pointer">
                9
            </div>
            <div onClick={handleKey} className="keyboard__button-key pointer">
                0
            </div>
            <div onClick={handleKey} className="keyboard__button-key pointer">
                4
            </div>
            <div onClick={handleKey} className="keyboard__button-key pointer">
                5
            </div>
            <div onClick={handleKey} className="keyboard__button-key pointer">
                6
            </div>
            <div onClick={handleKey} className="keyboard__button-key pointer">
                .
            </div>
            <div onClick={handleKey} className="keyboard__button-key pointer">
                1
            </div>
            <div onClick={handleKey} className="keyboard__button-key pointer">
                2
            </div>
            <div onClick={handleKey} className="keyboard__button-key pointer">
                3
            </div>
            <div
                onClick={handleKey}
                className="keyboard__button-key pointer keyboard__igual"
            >
                =
            </div>
        </div>
    );
};

export default Keyboard;
