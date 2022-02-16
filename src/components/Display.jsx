import React from "react";
import { useSelector } from "react-redux";

const Display = ({ value = 0 }) => {
    const { number } = useSelector((state) => state.ui);
    return (
        <div className="display__content">
            <p>{number}</p>
        </div>
    );
};

export default Display;
