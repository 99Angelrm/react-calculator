import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CalculadoraApp from "./CalculadoraApp";
import { store } from "./store/store";
import "./styles/styles.scss";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <CalculadoraApp />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
