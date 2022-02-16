import { doOperation } from "../helpers/doOperation";
import { types } from "../types/types";

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const concatPoint = (number, key) => ({
    type: types.number,
    payload: `${number}${key}`,
});

export const concatNumber = (key) => {
    return (dispatch, getState) => {
        const { done, number } = getState().ui;
        if (done) {
            dispatch({ type: types.restart });
            dispatch({
                type: types.number,
                payload: parseFloat(`${0}${key}`),
            });
        } else {
            dispatch({
                type: types.number,
                payload: parseFloat(`${number}${key}`),
            });
        }
    };
};

export const concatOperation = (number, key) => ({
    type: types.operation,
    payload: {
        operation: key,
        operator1: number,
    },
});

export const concatOperation2 = (number) => ({
    type: types.operation2,
    payload: {
        operator2: number,
    },
});

export const result = (result) => ({
    type: types.result,
    payload: result,
});

export const startOperation = () => {
    return (dispatch, getState) => {
        const { operator1: op1, operator2: op2, operation: op } = getState().ui;
        const resultado = doOperation(op1, op2, op);
        dispatch(result(resultado));
    };
};

export const igual = () => {
    return (dispatch, getState) => {
        const { number } = getState().ui;
        dispatch(concatOperation2(number));
        dispatch(startOperation());
    };
};

export const whatToDo = (number, key) => {
    if (key === ".") return concatPoint(number, key);
    if (key in numbers) return concatNumber(key);
    if (key === "+" || key === "-" || key === "*" || key === "÷") {
        return concatOperation(number, key);
    }
    if (key === "=") return igual(number);
};
