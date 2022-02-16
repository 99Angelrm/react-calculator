import React from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";
import Navbar from "./Navbar";

const MainScreen = () => {
    return (
        <div className="main__background">
            <div className="main__calculator">
                <Navbar />
                <Display value={'0'} />
                <Keyboard />
            </div>
        </div>
    );
};

export default MainScreen;
